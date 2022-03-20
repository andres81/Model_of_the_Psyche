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

import ExerciseEditor from "./ExerciseEditor"
import { v4 as uuidv4 } from 'uuid';
import {QUESTION, ANSWER} from './exercise-editor-constants.js'

import './style.scss'

class ExercisesEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    render() {

        let exercises = [];
        let questions = this.props.questions ? this.props.questions : [];
        questions.forEach(question => {
            exercises.push(
                <ExerciseEditor key={question.id}
                    question={question}
                    onQuestionChange={this.onQuestionChange}
                    addQuestion={() => this.addQuestion(question.id)}
                    removeQuestion={() => this.removeQuestion(question.id)} />);
        });

        return (
            <div className="exercises-editor">
                <br />
                <div className="exercises-editor-add-button-wrapper">
                    <button className="btn btn-primary" onClick={() => this.addQuestion()}>Add question</button>
                </div>
                {exercises}
            </div>
        )
    }

    onQuestionChange = (question) => {
        let newQuestions = this.getQuestions().map(oldQuestion => {
            return oldQuestion.id === question.id ? question : oldQuestion;
        });
        this.props.updateQuestions(newQuestions);
    }

    addQuestion = (id) => {
        let newQuestions = this.getQuestions();
        let newQuestion = this.createNewQuestion();
        newQuestion.id = uuidv4();
        if (id) {
            let index = this.findQuestionIndex(id);
            if (index > -1) {
                newQuestions.splice(index+1, 0, newQuestion)
            }
        } else {
            newQuestions.push(newQuestion);
        }
        this.props.updateQuestions(newQuestions);
    }

    createNewQuestion = ()  => {
        let question = _.cloneDeep(QUESTION);
        let answer = _.cloneDeep(ANSWER);
        answer.id = uuidv4();
        question.answers.push(answer);
        answer = _.cloneDeep(ANSWER);
        answer.id = uuidv4();
        question.answers.push(answer);
        return question;
    }

    removeQuestion = (id) => {
        let newQuestions = this.getQuestions();
        let index = this.findQuestionIndex(id);
        if (index > -1) {
            newQuestions.splice(index, 1)
        }
        this.props.updateQuestions(newQuestions);
    }

    findQuestionIndex = (id) => {
        if (!this.props.questions) {
            return -1;
        }
        return this.props.questions.findIndex(question => question.id === id);
    }

    getQuestions = () => {
        return this.props.questions ? _.cloneDeep(this.props.questions) : [];
    }
}

export default ExercisesEditor;