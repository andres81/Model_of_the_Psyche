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
import React from "react"
import { FaTrashAlt } from 'react-icons/fa';
import _ from 'lodash';

import './style.scss'

class AnswerLineEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let type;
        if (this.props.answerType === "singular") {
            type = "radio";
        } else if (this.props.answerType === "multiple") {
            type = "checkbox";
        }

        return (
            <div className="row answer-line-editor">
                <div className="answer-line-editor-radio col-sm-2">
                    <input name={this.props.id}
                        type={type}
                        onChange={(e) => this.updateAnswer("correct", e.target.checked)}
                        checked={this.props.answer.correct} />
                </div>
                <div className="col-sm-4">
                    <input value={this.props.answer.text}
                        onChange={(e) => this.updateAnswer("text", e.target.value)}
                        type="text" />
                </div>
                <div className="col-sm-6">
                    <textarea value={this.props.answer.explanationText}
                        onChange={(e) => this.updateAnswer("explanationText", e.target.value)}
                        rows="1"/>
                </div>
                {this.props.showDelete && <FaTrashAlt className="answer-line-editor-delete fa-trash-alt" onClick={this.props.onRemoveAnswer} />}
            </div>
        )
    }

    updateAnswer = (field, value) => {
        let newAnswer = _.cloneDeep(this.props.answer);
        newAnswer[field] = value;
        this.props.onAnswerChange(newAnswer);
    }
}

export default AnswerLineEditor;