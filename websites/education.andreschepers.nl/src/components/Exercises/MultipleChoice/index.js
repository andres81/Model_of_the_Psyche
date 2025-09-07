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
