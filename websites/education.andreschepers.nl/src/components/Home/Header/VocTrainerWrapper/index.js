/*
 * Copyright 2024 - 2025 André Schepers
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

import VocTrainerImpl from "../../../VocTrainer/VocTrainerImpl";

import './style.scss'

class VocTrainerWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vocTrainerJson: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.retrieveJson();
        }
    }

    componentDidMount() {
        this.retrieveJson();
    }

    retrieveJson = () => {
        let params = this.props.match.params;
        fetch('/learning/language/' + params.language + '/words/' + params.wordClass + '.json')
            .then(response => {
                    if (response.ok) {
                        return response.json().then(json => {
                            this.setState({vocTrainerJson: json});
                        });
                    }
                }
            );
    }

    render() {
        return (
            <div className="voc-trainer-wrapper">
                <VocTrainerImpl vocTrainerJson={this.state.vocTrainerJson} />
            </div>
        )
    }
}

export default VocTrainerWrapper;