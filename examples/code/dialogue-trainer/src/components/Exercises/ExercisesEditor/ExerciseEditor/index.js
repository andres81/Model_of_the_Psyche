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
import React from "react"
import _ from 'lodash';

import ExerciseEditorControlButtons from "./ExerciseEditorControlButtons";
import AnswerBlockEditor from "./AnswerBlockEditor";
import ExerciseEditorAnswerTypeSelector from "./ExerciseEditorAnswerTypeSelector";

import './style.scss'

class ExerciseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    render() {
        return (
            <div className="exercise-editor">
                <div className="row">
                    <div className="col-sm-3">
                        <span>Question</span>
                    </div>
                    <div className="exercise-editor-title col-sm-5">
                        <input value={this.props.question.title}
                            onChange={this.onQuestionTitleChange}
                            uuid={this.props.question.id}
                            type="text"
                            name="exercise-title" />
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <ExerciseEditorAnswerTypeSelector onAnswerTypeChange={this.onAnswerTypeChange} answerType={this.props.question.answerType} />
                <br />
                <AnswerBlockEditor onAnswersChange={this.onAnswersChange}
                    answerType={this.props.question.answerType}
                    answers={this.props.question && this.props.question.answers} />
                <ExerciseEditorControlButtons onAddQuestion={this.props.addQuestion} onRemoveQuestion={this.props.removeQuestion} />
            </div>
        )
    }

    onAnswersChange = (newAnswers) => {
        this.onQuestionChange("answers", _.cloneDeep(newAnswers));
    }

    onQuestionTitleChange = (e) => {
        let newValue = e.target.value;
        this.onQuestionChange("title", newValue);
    }

    onAnswerTypeChange = (newType) => {
        let newQuestion = _.cloneDeep(this.props.question);
        if (newQuestion) {
            newQuestion["answerType"] = newType;
            newQuestion.answers.forEach((answer, index) => {
                if (index > 0) {
                    answer.correct = false;
                }
            });
            this.props.onQuestionChange(newQuestion);
        }
    }

    onQuestionChange = (field, newValue) => {
        let newQuestion = _.cloneDeep(this.props.question);
        if (newQuestion) {
            newQuestion[field] = newValue;
            this.props.onQuestionChange(newQuestion);
        }
    }
}

export default ExerciseEditor;