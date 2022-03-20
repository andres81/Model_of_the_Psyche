/*
Copyright (C) 2022  André Schepers

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
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