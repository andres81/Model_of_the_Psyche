/*
 * Copyright 2024 André Schepers
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
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import './style.scss';

class InformationView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            information: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.retrieveMarkdown();
        }
    }

    componentDidMount() {
        this.retrieveMarkdown();
    }

    retrieveMarkdown = () => {
        let params = this.props.match.params;
        fetch('/information/' + params.category + "/" + params.informationName + '.md')
            .then(response => {
                if (response.ok) {
                    return response.text().then(markdown => {
                        this.setState({information: markdown});
                    });
                }
            }
        );
    }

    render() {
        return (
            <div className="information-view-container">
                <div className="information-view-inner-container">
                    <div className="information-block">
                        <ReactMarkdown children={this.state.information} remarkPlugins={[remarkGfm]} />
                    </div>
                </div>
            </div>
        )
    }
}

export default InformationView;