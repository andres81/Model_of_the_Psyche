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
import React from 'react';

import InputEditor from './InputEditor';
import AccordionEntry from './AccordionEntry';
import Accordion from './Accordion';
import ManualEditing from './ManualEditing';
import Dialogue from '../Dialogue';
import _ from 'lodash';
import Controls from './Controls';
import {DIALOGUE_EDITOR_ROW} from '../constants.js'
import {DEFAULT_DIALOGUE} from '../dialogue-constants.js'
import ExercisesEditor from '../../Exercises/ExercisesEditor'

import './style.scss';

class DialogueEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            base64: this.b64EncodeUnicode(DEFAULT_DIALOGUE),
            dialogue: DEFAULT_DIALOGUE
        };
    }

    render() {
        let title = this.state.dialogue && this.state.dialogue.title ? this.state.dialogue.title : "";
        return (
            <div className="container dialogue-editor-container">
                <Controls base64={this.state.base64}
                          updateTitle={this.updateTitle}
                          title={title}
                          dialogue={this.state.dialogue}
                          updateDialogue={this.updateDialogue}
                          addRow={this.addRow}
                          onChangeBase64={this.onBase64Input} />
                <br />
                <InputEditor lines={this.state.dialogue.lines} updateLines={this.updateLines} />
                <br />
                <Accordion>
                    <AccordionEntry id="1" headerText={"Preview"} child={<Dialogue showFileControls={false} dialogueJson={this.state.dialogue} />}/>
                    <AccordionEntry id="2" headerText={"Manual editing"} child={<ManualEditing updateDialogue={this.updateDialogue} json={this.state.dialogue}/>}/>
                    <AccordionEntry id="3" headerText={"Exercises editing"} child={
                        <ExercisesEditor questions={this.state.dialogue.questions} updateQuestions={this.updateQuestions} />
                    }/>

                </Accordion>
            </div>
        )
    }

    updateQuestions = (questions) => {
        let dialogue = this.state.dialogue;
        dialogue.questions = _.cloneDeep(questions);
        this.setState({
            dialogue: dialogue
        });
    }

    updateDialogue = (dialogue) => {
        this.setState({dialogue: dialogue});
    }

    onBase64Input = (base64) => {
        let dialogue = this.decodeBase64ToJson(base64);
        if (dialogue) {
            this.setState(
                {
                    base64: base64,
                    dialogue: dialogue
                }
            );
        }
    }

    updateTitle = (title) => {
        this.setState({dialogue: Object.assign({}, _.cloneDeep(this.state.dialogue), {title: title})});
    }

    decodeBase64ToJson = (base64Str) => {
        if (!(base64Str && base64Str.length > 0)) {
            return null;
        }
        try {
            let decode = decodeURIComponent(escape(window.atob( base64Str )));
            return JSON.parse(decode);
        } catch(e) {
            console.error("Error decoding json: ", e);
            return null;
        }
    }

    b64EncodeUnicode = (obj) => {
        let str = JSON.stringify(obj);
        let base64Str = btoa(unescape(encodeURIComponent(str)));
        return base64Str;
    }

    updateDialogue = (dialogue) => {
        this.setState({dialogue: _.cloneDeep(dialogue)});
    }

    addRow = () => {
        let lines = this.state.dialogue.lines.slice();
        lines.push(_.cloneDeep(DIALOGUE_EDITOR_ROW));
        this.updateLines(lines);
    }

    updateLines = (lines) => {
        let newDialogue = _.cloneDeep(this.state.dialogue);
        newDialogue.lines = _.cloneDeep(lines);
        this.setState(
            {
                dialogue: newDialogue,
                base64: this.b64EncodeUnicode(newDialogue)
            }
        );
    }

    openCloseToggle = () => {
        this.setState({openClose: !(!!this.state.openClose)});
    }
}

export default DialogueEditor;