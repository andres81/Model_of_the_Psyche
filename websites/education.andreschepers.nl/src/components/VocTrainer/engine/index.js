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

import _ from "lodash";

import * as util from "./utils.js"

export const StateUpdateType = {
    TYPED_ANSWER: "TYPED_ANSWER",
    SET_QUERY_TYPE: "SET_QUERY_TYPE",
    UPDATE_EXERCISE_OPTIONS: "UPDATE_EXERCISE_OPTIONS",
    SET_VOCABULARY: "SET_VOCABULARY",
    SET_LEVEL: "SET_LEVEL",
    SET_QUERY_COLUMN: "SET_QUERY_COLUMN",
    SET_OPTIONS_COLUMN: "SET_OPTIONS_COLUMN",
    SET_INPUT_TYPE: "SET_INPUT_TYPE",
    SWITCH_COLUMNS: "SWITCH_COLUMNS",
    OPTION_CHOSEN: "OPTION_CHOSEN",
    LOCK_OPTION_ROTATION: "LOCK_OPTION_ROTATION",
    ACTIVATE_ROW_INDEX: "ACTIVATE_ROW_INDEX",
    TOGGLE_TYPING_ANSWER_HINT: "TOGGLE_TYPING_ANSWER_HINT",
    TOGGLE_TYPING_ANSWER_PREFILLED: "TOGGLE_TYPING_ANSWER_PREFILLED",
    TOGGLE_SHOW_ANSWER: "TOGGLE_SHOW_ANSWER",
    SET_AUDIO_ENABLED: "SET_AUDIO_ENABLED",
    INPUT_TYPES: {
        OPTIONS: 'options',
        TYPING: 'typing'
    },
    COLUMN_SIDE: {
        LEFT: 'left',
        RIGHT: 'right'
    },
    QUERY_TYPE: {
        TEXT: 'text',
        SOUND: 'sound'
    }
}

const INITIAL_VOCABULARY = {"name":"tutorial lesson","version":"0.1.0","pairs":[{"left":{"text":"yellow"},"right":{"text":"jaune"}},{"left":{"text":"orange"},"right":{"text":"orange"}},{"left":{"text":"green"},"right":{"text":"vert"}},{"left":{"text":"red"},"right":{"text":"rouge"}},{"left":{"text":"purple"},"right":{"text":"pourpre"}},{"left":{"text":"blue"},"right":{"text":"bleu"}},{"left":{"text":"black"},"right":{"text":"noir"}},{"left":{"text":"white"},"right":{"text":"blanc"}}]};

const MAX_SCORE = 3;

const INITIAL_STATE =  {
    queryIndex: 0,
    activePairIndexes: [0,1,2,3,4],
    level: 0,
    queryType: StateUpdateType.QUERY_TYPE.TEXT,
    queryColumn: StateUpdateType.COLUMN_SIDE.LEFT,
    optionsColumn: StateUpdateType.COLUMN_SIDE.RIGHT,
    optionInputType: StateUpdateType.INPUT_TYPES.OPTIONS,
    exerciseUserScores: {},
    loadedVocabulary: {},
    showAnswer: false
};

export const updateState = (state, updateType, payload) => {
    switch(updateType) {
        case StateUpdateType.SET_QUERY_TYPE:
            return setQueryType(state, payload);
        case StateUpdateType.UPDATE_EXERCISE_OPTIONS:
            return Object.assign({}, state, payload);
        case StateUpdateType.SET_VOCABULARY:
            return Object.assign({}, state, createVocabularyState(payload));
        case StateUpdateType.SET_LEVEL:
            return changeLevel(state, payload);
        case StateUpdateType.SET_OPTIONS_COLUMN:
            return Object.assign({}, state, {optionsColumn: payload});
        case StateUpdateType.SET_QUERY_COLUMN:
            return Object.assign({}, state, {queryColumn: payload});
        case StateUpdateType.SET_INPUT_TYPE:
            return Object.assign({}, state, {optionInputType: payload});
        case StateUpdateType.SWITCH_COLUMNS:
            return Object.assign({}, state, {queryColumn: state.optionsColumn, optionsColumn: state.queryColumn});
        case StateUpdateType.OPTION_CHOSEN:
            return processOptionChosen(state, payload);
        case StateUpdateType.TYPED_ANSWER:
            return processOptionTyped(state, payload);
        case StateUpdateType.TOGGLE_TYPING_ANSWER_HINT:
            return Object.assign({}, state, {showTypingAnswerHint: !!!state.showTypingAnswerHint});
        case StateUpdateType.TOGGLE_TYPING_ANSWER_PREFILLED:
            return Object.assign({}, state, {showTypingAnswerPrefilled: !!!state.showTypingAnswerPrefilled});
        case StateUpdateType.SET_AUDIO_ENABLED:
            return Object.assign({}, state, {audioEnabled: payload});
        case StateUpdateType.ACTIVATE_ROW_INDEX:
            return activateRowIndex(state, payload)
        case StateUpdateType.LOCK_OPTION_ROTATION:
            return Object.assign({}, state, {isRotationLocked: payload});
        case StateUpdateType.TOGGLE_SHOW_ANSWER:
            return Object.assign({}, state, {showAnswer: !!!state.showAnswer})
        default:
            return state;
    }
}

export const activateRowIndex = (state, rowIndex) => {
    let stateCopy = util.deepCopy(state);
    const {activePairIndexes} = stateCopy;
    activePairIndexes.push(rowIndex);
    activePairIndexes.shift();
    return stateCopy;
}

export const getOptionTexts = (state) => {
    const {activePairIndexes, optionsColumn, loadedVocabulary} = state;
    let pairs = loadedVocabulary.pairs;
    let map = new Map();
    activePairIndexes.forEach((activePairIndex, index) => {
        map.set(activePairIndex, pairs[activePairIndex][optionsColumn].text);
    });
    return map
}

export const getInitialState = () => {
    let initialState = util.deepCopy(INITIAL_STATE);
    initialState.exerciseUserScores = getInitialScores(INITIAL_VOCABULARY);
    initialState.loadedVocabulary = INITIAL_VOCABULARY;
    return initialState;
}

const getInitialScores = (vocabulary) => {
    const nofPairs = vocabulary.pairs.length;
    const scores = [];
    for (let i=0;i<nofPairs;++i) {
        scores[i] = 0;
    }
    return scores;
}

const createVocabularyState = (loadedVocabulary) => {
    if (!loadedVocabulary) {
        loadedVocabulary = {pairs:[]};
    }
    return Object.assign({}, INITIAL_STATE, {
        loadedVocabulary: loadedVocabulary,
        exerciseUserScores: getInitialScores(loadedVocabulary)
    });
}

const setQueryType = (state, newType) => {
    let newState = util.deepCopy(state);
    newState.queryType = newType;
    return newState;
}

const setOptionsType = (state, newType) => {
    let newState = util.deepCopy(state);
    newState.optionInputType = newType;
    return newState;
}

const changeLevel = (state, payload) => {
    let newState = util.deepCopy(state);
    if (payload === 3) {
        newState.optionInputType = StateUpdateType.INPUT_TYPES.TYPING;
    } else {
        newState.optionInputType = StateUpdateType.INPUT_TYPES.OPTIONS;
    }
    newState.level = payload;
    return newState;
}

const processOptionChosen = (state, index) => {
    let optionIndex = parseInt(index);
    let newState = util.deepCopy(state);
    let isCorrectAnswer = optionIndex === newState.queryIndex;
    updateScore(newState, newState.queryIndex, isCorrectAnswer);
    if (!isCorrectAnswer) {
        return newState;
    }
    newState = levelDependantActions(newState, optionIndex);
    newState = chooseNewQueryIndex(newState, optionIndex);
    return newState;
};

const processOptionTyped = (state, typedAnswer) => {
    let optionsColumn = state.optionsColumn;
    let rightAnswer = state.loadedVocabulary.pairs[state.queryIndex][optionsColumn].text;
    let isEqual = new Intl.Collator("ru").compare(rightAnswer.toLowerCase(),typedAnswer.toLowerCase()) === 0;
    isEqual = isEqual || rightAnswer.toLowerCase() === typedAnswer.toLowerCase();
    if (!isEqual) {
        return state;
    }
    let newState = util.deepCopy(state);
    newState = levelDependantActions(newState, state.queryIndex);
    newState = chooseNewQueryIndex(newState, state.queryIndex);
    return newState;
}

const chooseNewQueryIndex = (state, optionIndex) => {
    let newArray = [];
    let activePairs = state.activePairIndexes.slice();
    util.removeArrayElement(activePairs, optionIndex);
    activePairs.forEach(pairIndex => {
        let score = state.exerciseUserScores[pairIndex];
        newArray = util.addElementNofTimes(newArray, pairIndex, MAX_SCORE + 1 - score);
    });
    let newQueryIndex = newArray[util.randomNumber(newArray.length-1)];
    return Object.assign({}, state, {queryIndex : newQueryIndex});
};

const updateScore = (state, queryIndex, isCorrectAnswer) => {
    let score = isCorrectAnswer ? 1 : -1;
    let scores = state.exerciseUserScores;
    let newScore = scores[queryIndex] + score;
    if (newScore > MAX_SCORE) {
        scores[queryIndex] = MAX_SCORE;
    } else if (newScore < 0) {
        scores[queryIndex] = 0;
    } else {
        scores[queryIndex] = newScore;
    }
    if (scores.filter(score => score < MAX_SCORE).length <= 0) {
        state.exerciseUserScores = getInitialScores(state.loadedVocabulary);
    }
};

const updateActiveRows = (state, optionIndex) => {
    if (state.exerciseUserScores[optionIndex] !== MAX_SCORE) {
        return state;
    }
    let activeIndexes = state.activePairIndexes.slice();
    let randomNewIndex = getRandomNonActivePairIndex(state);
    if (!randomNewIndex) {
        return state;
    }
    util.replaceIntInArray(activeIndexes, optionIndex, randomNewIndex);
    state.activePairIndexes = activeIndexes;
    return state;
};

const getRandomNonActivePairIndex = (state) => {
    let otherOptionsIndexes = getNonActivePairIndexes(state);
    if (otherOptionsIndexes.length <= 0) {
        return null;
    }
    return util.randomElementFromArray(otherOptionsIndexes);
}

const getNonActivePairIndexes = (state) => {
    let indexes = util.createNaturalNumbersArray(state.loadedVocabulary.pairs.length);
    indexes = _.difference(indexes, state.activePairIndexes);
    _.remove(indexes, (index) => state.exerciseUserScores[index] >= MAX_SCORE);
    return indexes;
}

const levelDependantActions = (state, optionIndex) => {
    if (state.isRotationLocked) {
        return state;
    }
    switch(state.level) {
        case 0:
            return updateActiveRows(state, optionIndex);
        case 1:
            state = updateActiveRows(state, optionIndex);
            return Object.assign({}, state, {activePairIndexes: _.shuffle(state.activePairIndexes.slice())});
        case 2:
        case 3:
            let activePairIndexes = util.randomArrayIndexes(5, state.loadedVocabulary.pairs);
            return Object.assign({}, state, {activePairIndexes: activePairIndexes});
        default: return state;
    }
};


