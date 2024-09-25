/*
 * Copyright 2022 - 2024 André Schepers
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

import React from "react";

export default function CaseFile({href, image, imageSource, heading, subheading}) {

    return (
        <div className="col-lg-4 col-sm-6">
            <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href={href}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={image} alt="..."/>
                </a>
                {!!imageSource && <a target={"_blank"} href={imageSource}>image source</a>}
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{heading}</div>
                    <div className="portfolio-caption-subheading text-muted">{subheading}</div>
                </div>
            </div>
        </div>
    )

}
