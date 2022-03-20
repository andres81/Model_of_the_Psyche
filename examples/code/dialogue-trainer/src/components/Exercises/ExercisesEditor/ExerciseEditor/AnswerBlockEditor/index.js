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