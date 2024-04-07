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
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { FaPlus } from 'react-icons/fa';

import AnswerLineEditor from "./AnswerLineEditor"
import {ANSWER} from '../../exercise-editor-constants.js'

import './style.scss'

class AnswerBlockEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    render() {

        let id = uuidv4();

        let answers = [];
        this.props.answers.forEach((answer, index) => {
            if (index >= 4) {
                return;
            }
            answers.push(
                <AnswerLineEditor key={answer.id}
                    id={id}
                    showDelete={(index >= 2)}
                    answer={answer}
                    answerType={this.props.answerType}
                    onAnswerChange={this.onAnswerChange}
                    onRemoveAnswer={() => this.onRemoveAnswer(answer.id)} />);
        });

        return (
            <div className="container answer-block-editor">
                <div className="answer-block-editor-header row">
                    <div className="col-sm-2 answer-block-editor-header-radio">
                        <span>Correct answer(s)</span>
                    </div>
                    <div className="col-sm-4 answer-block-editor-header-text">
                        <span>Answer option text</span>
                    </div>
                    <div className="col-sm-6 answer-block-editor-header-correction-text">
                        <span>Answer explanation</span>
                    </div>
                </div>
                {answers}
                {answers.length < 4 && <FaPlus className="answer-block-editor-add-line fa-plus" onClick={this.addAnswer} />}
            </div>
        )
    }

    onRemoveAnswer = (id) => {
        let newAnswers = _.cloneDeep(this.props.answers);
        if (newAnswers) {
            newAnswers.splice(newAnswers.findIndex(answer => id === answer.id), 1);
            this.props.onAnswersChange(newAnswers);
        }
    }

    addAnswer = () => {
        let newAnswers = _.cloneDeep(this.props.answers);
        let newAnswer = _.cloneDeep(ANSWER);
        newAnswer.id = uuidv4();
        if (newAnswers) {
            newAnswers.push(newAnswer);
            this.props.onAnswersChange(newAnswers);
        }
    }

    onAnswerChange = (newAnswer) => {
        let newAnswers = _.cloneDeep(this.props.answers);
        if (this.props.answerType === "singular") {
            newAnswers.forEach(answer => answer.correct = false);
        }
        let oldAnswerIndex = newAnswers.findIndex(answer => newAnswer.id === answer.id)
        newAnswers.splice(oldAnswerIndex, 1, newAnswer);
        this.props.onAnswersChange(newAnswers);
    }
}

export default AnswerBlockEditor;