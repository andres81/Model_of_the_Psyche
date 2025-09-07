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

import React from 'react'

import GitHubButton from 'react-github-btn'

import './style.css';

class ProjectsSection extends React.Component {

    render() {

        return (
            <section className="page-section" id="projects">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Projects</h2>
                        <h3 className="section-subheading text-muted">Major projects I'm working on</h3>
                    </div>
                    <br />
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h4 className="my-3">Model of the Psyche</h4>
                            <p className="text-muted">How does the psyche work? What is the architecture? What are the
                               basic principles? I have new insights!
                            </p>
                            <br />
                            <GitHubButton href="https://github.com/andres81/Model_of_the_Psyche"
                                data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;"
                                data-icon="octicon-comment-discussion"
                                data-size="large">Visit</GitHubButton>
                            <GitHubButton href="https://github.com/andres81"
                                data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;"
                                data-size="large" data-show-count="true">Follow @andres81</GitHubButton>
                        </div>
                        <div className="col-md-4">
                            <h4 className="my-3">Hypothesis of fast Learning</h4>
                            <p className="text-muted">Can we learn a new language in two weeks? Can we learn non-stop
                               (sub)-consciously? Part of the Model of the Psyche project.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="my-3">Rules of Engagement</h4>
                            <p className="text-muted">A large project that focuses on the basic rules of interaction
                                between objects. This also means focus on the social interaction of humans.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectsSection;