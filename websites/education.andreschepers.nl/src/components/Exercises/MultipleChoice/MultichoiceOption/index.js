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

import { v4 as uuidv4 } from 'uuid';

import './style.scss'

class MultichoiceOption extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let uuid = uuidv4();
        let correctionsClassName = this.getCorrectionsClassName();
        return (
            <div className="form-check dialogue-info-modal-multiplechoiceoption">
                <input className={correctionsClassName + " form-check-input"}
                        type={this.getInputType()}
                        name={this.props.id} value={this.props.answer.id}
                        id={uuid}
                        checked={this.getIsChecked()}
                        onChange={this.onMultichoiceChange}
                        disabled={this.props.showCorrections} />
                <label className={correctionsClassName + " form-check-label"} htmlFor={uuid}>
                    {this.props.answer.text}
                </label>
                <br />
                {this.props.showCorrections && <span className="explanation-text">{this.props.answer.explanationText}</span>}
            </div>
        )
    }

    getIsChecked = () => {
        return this.props.questionState && this.props.questionState.givenAnswers.some(id => id === this.props.answer.id);
    }

    getCorrectionsClassName = () => {
        let correctionsClassName = this.props.answer.correct ? "correct-answer" : "incorrect-answer";
        return this.props.showCorrections ? correctionsClassName : "";
    }

    getInputType = () => {
        if (this.props.answerType === "singular") {
            return "radio";
        } else if (this.props.answerType === "multiple") {
            return "checkbox";
        }
    }

    onMultichoiceChange = (e) => {
        this.props.onChoiceMade({
            exerciseId: e.target.name,
            answerType: e.target.type,
            answerId: e.target.value,
            checked: e.target.checked
        });
    }
}

export default MultichoiceOption;