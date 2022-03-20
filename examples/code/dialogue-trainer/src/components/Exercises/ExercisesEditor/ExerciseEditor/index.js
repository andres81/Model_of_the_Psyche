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