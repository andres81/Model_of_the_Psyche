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
import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

import MultichoiceOption from './MultichoiceOption'

import './style.scss'

class MultipleChoice extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showAnswers: false
        };
    }

    render() {
        let showOptions = (this.props.questionState && this.props.questionState.showOptions && !this.props.collapsed);
        let showOptionsClassname = showOptions ? " open" : "";
        let titleClassNames = this.getTitleClassName() + " title";
        let answerOptions = this.createMultichoiceOptions(this.props.question);
        return (
            <div className="row dialogue-info-modal-multiplechoice">
                <div className={"col-sm-12 title-container" + showOptionsClassname} onClick={this.props.onShowOptionsToggle}>
                    <span className={titleClassNames}>
                        {this.props.question.title}
                    </span>
                    <span className="menu-arrow-wrapper">
                        &nbsp;
                        <span className="menu-arrow"></span>
                        &nbsp;
                    </span>
                </div>
                {showOptions &&
                    <div className="">
                        <br />
                        {answerOptions}
                    </div>
                }
            </div>
        )
    }

    getTitleClassName = () => {
        if (!this.props.showCorrections) {
            return "";
        }
        return this.answeredCorrect() ? "title-correct-answer" : "title-incorrect-answer";
    }

    answeredCorrect = () => {
        let correctAnswers = this.props.question.answers
            .filter(answer => answer.correct)
            .map(answer => answer.id);
        if (!this.props.questionState) {
            return;
        }
        return _.isEqual(correctAnswers, this.props.questionState.givenAnswers);
    }

    createMultichoiceOptions = (multiplechoiceJson) => {
        return multiplechoiceJson.answers.map(answer => {
            return <MultichoiceOption key={uuidv4()}
                id={multiplechoiceJson.id}
                onChoiceMade={this.props.onChoiceMade}
                questionState={this.props.questionState}
                answerType={multiplechoiceJson.answerType}
                answer={answer}
                showCorrections={this.props.showCorrections} />
        });
    }
}

export default MultipleChoice;
