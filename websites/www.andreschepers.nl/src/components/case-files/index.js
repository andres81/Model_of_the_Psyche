/*
 * Copyright 2022 - 2025 André Schepers
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React from 'react';
import CaseFile from "../case-file";
import CASE_FILES from "./case-files";

export default function CaseFiles() {

    var caseFileElems = CASE_FILES.map(
        (caseFile, key) => {
            return <CaseFile key={key} href={caseFile.href}
                             image={caseFile.image}
                             imageSource={caseFile.imageSource}
                             heading={caseFile.heading}
                             subheading={caseFile.subheading} />
        }
    );

    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Case Files</h2>
                    <h3 className="section-subheading text-muted">Societal problems and social abuses.</h3>
                </div>
                <div className="row">
                    {caseFileElems}
                </div>
            </div>
        </section>
    )
}
