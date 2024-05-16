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

import React from 'react'
import {useLocation, withRouter} from 'react-router-dom'

import Dialogue from '../../../DialogueTools/Dialogue'

import './style.scss'

class DialogueWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dialogue: null
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
        fetch(this.props.location.pathname + '.json')
            .then(response => {
                if (response.ok) {
                    return response.json().then(json => {
                        this.setState({dialogue: json});
                    });
                }
            }
        );
    }

    render() {
        return (
            <div className="dialogue-wrapper">
                <Dialogue dialogueJson={this.state.dialogue} />
            </div>
        )
    }
}

export default withRouter(DialogueWrapper);
