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

import Nav from "../nav";

export default function Header() {

    return (
        <header className="masthead">
            <div className="container">
                <Nav/>
                <div className="masthead-subheading black-text-shadow">Education will set you free</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </div>
        </header>
    )
}
