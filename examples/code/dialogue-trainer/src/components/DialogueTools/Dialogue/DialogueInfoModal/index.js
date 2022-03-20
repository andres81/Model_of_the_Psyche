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

import VocTrainerImpl from "../../../VocTrainer/VocTrainerImpl";

import './style.scss'

class DialogueInfoModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidCatch = (error, info) => {
        this.setState({uiError: true});
    }

    render() {

        let pairs = [
            {"left": {"text": "oneLeft"}, "right": {"text": "oneRight"}},
            {"left": {"text": "twoLeft"}, "right": {"text": "twoRight"}},
            {"left": {"text": "threeLeft"}, "right": {"text": "threeRight"}},
            {"left": {"text": "fourLeft"}, "right": {"text": "fourRight"}},
            {"left": {"text": "fiveLeft"}, "right": {"text": "fiveRight"}}
        ];

        let exercise = {pairs: []};
        let lines = this.props.dialogue.lines;
        lines.forEach((line, index) => {
            let wordPairs = line.wordTranslations;
            if (wordPairs) {
                exercise.pairs = exercise.pairs.concat(wordPairs);
            }
        });

        if (exercise.pairs.length < 5) {
            for (let i = exercise.pairs.length; i < 5; i++) {
                exercise.pairs.push(pairs[i]);
            }
        }

        let uniqueWords = [];
        exercise.pairs = exercise.pairs.filter(pair => {
            let id = (pair.left.text+pair.right.text).toLowerCase();
            if (uniqueWords.indexOf(id) > -1) {
                return false;
            }
            uniqueWords.push(id);
            return true;
        });

        let isError = this.state.uiError;

        return (
            <div className="dialogue-info-modal">
                <br /><br />
                <h1 className="dialogue-info-modal-title">{this.props.dialogue.title}</h1>
                <br /><hr style={{"color": "white"}}/><br />
                <h3 className="dialogue-info-modal-header">Tags</h3>
                <br />
                <br /><hr style={{"color": "white"}}/><br />
                <h3 className="dialogue-info-modal-header">Addendum</h3>
                <br />
                <div className="dialogue-info-modal-addendum">
                    {/*<ReactMarkdown children={this.props.dialogue.markdown} remarkPlugins={[remarkGfm]} />*/}
                </div>
                <br /><hr style={{"color": "white"}}/><br />
                <h3 className="dialogue-info-modal-header">Vocabulary</h3>
                <br />

                {isError &&
                    <h3 className="text-center">Cannot show VocabularyTrainer: Not in a valid state!</h3>
                }
                {!isError &&
                    <VocTrainerImpl vocTrainerJson={exercise} />
                }

                <br /><hr style={{"color": "white"}}/><br />
            </div>
        )
    }
}

export default DialogueInfoModal;