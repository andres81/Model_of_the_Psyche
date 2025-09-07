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

import './style.css'
import {Link} from "react-router-dom";

export default function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id={"navBarId"}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link black-text-shadow" to="/">Home</Link>
                        {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link black-text-shadow" to="#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link black-text-shadow"
                              rel='noopener noreferrer'
                              to="https://education.andreschepers.nl"
                              target="_blank">
                            Education
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
