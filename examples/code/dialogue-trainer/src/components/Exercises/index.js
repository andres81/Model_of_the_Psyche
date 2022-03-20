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

import MultipleChoice from "./MultipleChoice";

import './style.scss'

class Exercises extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionStates: {},
            collapseAll: false
        };
    }

    componentDidMount() {
        this.updateQuestionStates();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps === this.props) {
            return;
        }
        this.updateQuestionStates();
    }

    render() {

        let questions = this.createQuestions(this.props.questions);
        return (
            <div className="container">
                <div className="row">
                    <div className="questions-container">
                        <h3 className="title">Exercises</h3>
                        <button className="btn btn-primary" disabled={!!!this.state.areAllQuestionsAnswers}
                                onClick={this.onShowCorrections}>{this.state.showCorrections ? "Hide" : "Show"} corrections</button>
                        &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-primary" onClick={this.onCollapseAll}>Collapse all</button>
                        <br /><br />
                        {questions}
                    </div>
                </div>
            </div>
        )
    }

    onCollapseAll = () => {
        let questionStates = _.cloneDeep(this.state.questionStates);
        Object.keys(questionStates).forEach(key => {
            questionStates[key].showOptions = false;
        });
        if (questionStates) {
            this.setState({questionStates: questionStates, collapseAll: true});
        }
    }

    updateQuestionStates = () => {
        let questionStates = {};
        let questions = this.props.questions ? this.props.questions : [];
        questions.forEach(exercise => {
            questionStates[exercise.id] = {
                givenAnswers: []
            };
        });
        this.setState({questionStates: questionStates});
    }

    onShowCorrections = () => {
        this.setState({showCorrections: !!!this.state.showCorrections});
    }

    showOptionsToggle = (questionId) => {
        let questionStates = _.cloneDeep(this.state.questionStates);
        let questionState = questionStates[questionId];
        if (questionState) {
            questionState.showOptions = !!!questionState.showOptions;
            this.setState({questionStates: questionStates, collapseAll: false});
        }
    }

    processChoiceMade = (choiceMetaData) => {
        let questionStates = _.cloneDeep(this.state.questionStates);
        let questionAnswerState = questionStates[choiceMetaData.exerciseId];
        if (choiceMetaData.answerType === "radio") {
            questionAnswerState.givenAnswers = [choiceMetaData.answerId];
        } else if (choiceMetaData.answerType === "checkbox") {
            let newAnswers = questionAnswerState.givenAnswers.filter((answerId) => {
                return answerId !== choiceMetaData.answerId;
            });
            questionAnswerState.givenAnswers = newAnswers;
            if (choiceMetaData.checked) {
                questionAnswerState.givenAnswers.push(choiceMetaData.answerId);
            }
        }
        this.setState({questionStates: questionStates, areAllQuestionsAnswers: this.areAllQuestionsAnswered(questionStates)});
    }

    areAllQuestionsAnswered = (questionStates) => {
        let areAllQuestionsAnswers = true;
        Object.keys(questionStates).forEach(key => {
            areAllQuestionsAnswers = areAllQuestionsAnswers && questionStates[key].givenAnswers.length > 0;
        });
        return areAllQuestionsAnswers;
    }

    createQuestions = (questions) => {
        if (!questions) {
            return [];
        }
        return questions.map(question => {
            return <MultipleChoice key={uuidv4()}
                collapsed={this.state.collapseAll}
                onChoiceMade={this.processChoiceMade}
                onShowOptionsToggle={() => this.showOptionsToggle(question.id)}
                questionState={this.state.questionStates[question.id]}
                question={question}
                showCorrections={!!this.state.showCorrections} />
        });
    }
}

export default Exercises;