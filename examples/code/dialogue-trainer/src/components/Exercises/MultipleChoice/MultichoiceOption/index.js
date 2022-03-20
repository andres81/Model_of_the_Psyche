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