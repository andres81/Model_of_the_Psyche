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
import React from "react";

import QueryBlock from "./QueryBlock";
import OptionBlock from "./OptionBlock"
import Menu from "./Menu";
import {StateUpdateType, getOptionTexts, getInitialState, updateState} from "./engine"
import VocTrainerContextModal from './VocTrainerContextModal';

import './style.scss'

class VocTrainerImpl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vocabularyState: getInitialState()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props && this.props.vocTrainerJson) {
            this.updateState(StateUpdateType.SET_VOCABULARY, this.props.vocTrainerJson);
        }
    }

    componentDidMount() {
        if (this.props.vocTrainerJson) {
            this.updateState(StateUpdateType.SET_VOCABULARY, this.props.vocTrainerJson);
        }
    }

    render() {

        const {level, optionsColumn, optionInputType, queryIndex, queryColumn, queryType, loadedVocabulary,
            activePairIndexes, isRotationLocked} = this.state.vocabularyState;

        let pairs = loadedVocabulary.pairs;
        let optionTexts = getOptionTexts(this.state.vocabularyState);
        let query = pairs[queryIndex][queryColumn][queryType];

        let showAnswer = !!this.state.showTypingAnswer || !!this.state.vocabularyState.showAnswer

        return (
            <div className="col align-self-center exercise-container">
                <Menu setLevel={(payload) => this.updateState(StateUpdateType.SET_LEVEL, payload)}
                    level={level}
                    queryColumn={queryColumn}
                    optionsColumn={optionsColumn}
                    queryType={queryType}
                    optionInputType={optionInputType}
                    showAnswer={showAnswer}
                    overviewSet={this.state.overviewSet}
                    isRotationLocked={isRotationLocked}
                    lockOptionRotation={(doLock) => this.updateState(StateUpdateType.LOCK_OPTION_ROTATION, doLock)}
                    switchColumnSides={(payload) => this.updateState(StateUpdateType.SWITCH_COLUMNS, payload)}
                    setQueryType={(payload) => this.updateState(StateUpdateType.SET_QUERY_TYPE, payload)}
                    setOptionsColumn={(payload) => this.updateState(StateUpdateType.SET_OPTIONS_COLUMN, payload)}
                    setQueryColumn={(payload) => this.updateState(StateUpdateType.SET_QUERY_COLUMN, payload)}
                    setInputType={(payload) => this.updateState(StateUpdateType.SET_INPUT_TYPE, payload)}
                    toggleShowAnswer={() => this.updateState(StateUpdateType.TOGGLE_SHOW_ANSWER)}
                    toggleOverview={() => this.setState({overviewSet : !this.state.overviewSet})}/>

                <QueryBlock queryType={queryType} query={query} />


                {optionInputType === StateUpdateType.INPUT_TYPES.OPTIONS && !this.state.overviewSet &&
                    <OptionBlock optionChosen={(payload) => this.updateState(StateUpdateType.OPTION_CHOSEN, payload)}
                        optionTexts={optionTexts} />
                }

                {optionInputType === StateUpdateType.INPUT_TYPES.TYPING && !this.state.overviewSet &&
                    <div className="exercise-container-typing" onKeyDown = {this.onShownAnswerKeyDown}
                             onKeyUp = {this.onShownAnswerKeyUp}>
                        <input key={query}
                            onChange={(e) => this.updateState(StateUpdateType.TYPED_ANSWER, e.target.value)} autoFocus={true} />
                        <br /><br />
                        {showAnswer &&
                            <span className="exercise-container-answer">{pairs[queryIndex][optionsColumn]["text"]}</span>
                        }
                    </div>
                }

                <VocTrainerContextModal overviewSet={this.state.overviewSet}
                    activePairIndexes={activePairIndexes}
                    activateRow={this.activateRow}
                    loadedVocabulary={loadedVocabulary}
                    onVocChange={this.onVocChange}
                    onClose={() => this.setState({overviewSet: false})} />

            </div>
        );
    }

    onShownAnswerKeyDown = (e) => {
        if (e.keyCode === 17) {
            this.setState({showTypingAnswer: true});
        }
        return e;
    }

    onShownAnswerKeyUp = (e) => {
        if (e.keyCode === 17) {
            this.setState({showTypingAnswer: false});
        }
        return e;
    }

    onVocChange = (updatedVoc) => {
        this.updateState(StateUpdateType.SET_VOCABULARY, updatedVoc);
    }

    activateRow = (rowIndex) => {
        this.updateState(StateUpdateType.ACTIVATE_ROW_INDEX, rowIndex);
    }

    updateState = (updateType, payload) => {
        let newState = updateState(this.state.vocabularyState, updateType, payload);
        this.setState({vocabularyState: newState});
    }
}

export default VocTrainerImpl;