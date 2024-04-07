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