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
import React from "react";

import QueryBlock from "./QueryBlock";
import OptionBlock from "./OptionBlock"
import Menu from "./Menu";
import {StateUpdateType, getOptionTexts, getInitialState, updateState} from "react-vocabulary-trainer"
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

        const {level, optionsColumn, optionInputType, queryIndex, queryColumn, queryType, loadedVocabulary} =
            this.state.vocabularyState;

        let pairs = loadedVocabulary.pairs;
        let optionTexts = getOptionTexts(this.state.vocabularyState);
        let query = pairs[queryIndex][queryColumn][queryType];

        return (
            <div className="col align-self-center exercise-container">
                <Menu setLevel={(payload) => this.updateState(StateUpdateType.SET_LEVEL, payload)}
                    level={level}
                    queryColumn={queryColumn}
                    optionsColumn={optionsColumn}
                    queryType={queryType}
                    optionInputType={optionInputType}
                    overviewSet={this.state.overviewSet}
                    switchColumnSides={(payload) => this.updateState(StateUpdateType.SWITCH_COLUMNS, payload)}
                    setQueryType={(payload) => this.updateState(StateUpdateType.SET_QUERY_TYPE, payload)}
                    setOptionsColumn={(payload) => this.updateState(StateUpdateType.SET_OPTIONS_COLUMN, payload)}
                    setQueryColumn={(payload) => this.updateState(StateUpdateType.SET_QUERY_COLUMN, payload)}
                    setInputType={(payload) => this.updateState(StateUpdateType.SET_INPUT_TYPE, payload)}
                    toggleOverview={() => this.setState({overviewSet : !this.state.overviewSet})}/>

                <QueryBlock queryType={queryType} query={query} />


                {optionInputType === StateUpdateType.INPUT_TYPES.OPTIONS && !this.state.overviewSet &&
                    <OptionBlock optionChosen={(payload) => this.updateState(StateUpdateType.OPTION_CHOSEN, payload)}
                        optionTexts={optionTexts} />
                }

                <VocTrainerContextModal overviewSet={this.state.overviewSet}
                    loadedVocabulary={loadedVocabulary}
                    onVocChange={this.onVocChange}
                    onClose={() => this.setState({overviewSet: false})} />

            </div>
        );
    }

    onVocChange = (updatedVoc) => {
        this.updateState(StateUpdateType.SET_VOCABULARY, updatedVoc);
    }

    updateState = (updateType, payload) => {
        let newState = updateState(this.state.vocabularyState, updateType, payload);
        this.setState({vocabularyState: newState});
    }
}

export default VocTrainerImpl;