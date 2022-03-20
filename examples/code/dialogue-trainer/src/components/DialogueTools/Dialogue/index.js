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
import ReactModal from "react-modal";

import {FaTimes, FaUniversity} from 'react-icons/fa';
import {AiTwotoneFolderOpen, AiOutlineDownload} from 'react-icons/ai';

import DialogueRow from './DialogueRow'
import DialogueInfoModal from './DialogueInfoModal';
import {readFile, downloadJson} from '../../../util/FileUtils';
import Exercise from '../../Exercises';
import './style.scss'

class Dialogue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogueJson: this.props.dialogueJson
        };
        this.fileInputRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                dialogueJson: this.props.dialogueJson
            })
        }
    }

    render() {
        let isLoaded = !!this.state.dialogueJson
        let title = isLoaded ? this.state.dialogueJson.title : "";

        return (
            <div className="dialogue-container">
                <h1 className="dialogue-title">{title}</h1>
                <br />
                <div className="dialogue-inner-container container">
                    {this.getControls()}
                    {this.getRows()}
                    <div className="dialogue-container-bottom-padding"/>
                </div>
                <Exercise questions={this.state.dialogueJson && this.state.dialogueJson.questions} />
                <ReactModal isOpen={this.state.showDialogueModal}
                        className="modal-inner"
                        portalClassName="dialogue-info-modal-bg"
                        ariaHideApp={false}>
                    <FaTimes className="dialogue-modal-close-button-icon" onClick={() => this.setState({showDialogueModal: false})} />
                    <DialogueInfoModal dialogue={this.state.dialogueJson}/>
                </ReactModal>
            </div>
        );
    }

    getRows = () => {
        if (!this.state.dialogueJson) {
            return [];
        }
        const dialogueRowElems = [];
        const lines = this.state.dialogueJson.lines;
        const names = new Set();
        lines.forEach((line, index) => {
            names.add(line.personName);
            let classes = 'dialogue-row-' + ([...names].indexOf(line.personName) + 1);
            dialogueRowElems.push(
                <DialogueRow key={index} line={line} classes={classes} translationEnabled={!!this.state.translationEnabled} />
            );
        });
        return dialogueRowElems;
    }

    getControls = () => {
        let isLoaded = !!this.state.dialogueJson
        let showFileControls = this.props.showFileControls === undefined || !!this.props.fileControls;
        return <div className="dialogue-controls row text-start">
            <div className="col-sm-6 dialogue-controls-inner">
                { isLoaded && <div className="dialogue-controls-translation form-check form-switch">
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dialogue translation</label>
                    <input onChange={this.toggleTranslation} className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div> }
                { isLoaded && <FaUniversity className="dialogue-controls-exercise-button" onClick={() => this.setState({showDialogueModal: true})} />}
                { showFileControls && <AiTwotoneFolderOpen className="dialogue-controls-load-button" onClick={() => this.fileInputRef.current.click()} /> }
                { showFileControls && <AiOutlineDownload className="dialogue-controls-download-button" onClick={() => downloadJson(this.state.dialogueJson.title, this.state.dialogueJson)} /> }
                { showFileControls && <input type='file' ref={this.fileInputRef} className="file-input" onChange={() => readFile(this.fileInputRef, this.processFileContents)} /> }
            </div>
        </div>;
    }

    toggleTranslation = () => {
        this.setState({translationEnabled: !!!this.state.translationEnabled});
    }

    processFileContents = (fileText) => {
        try {
            let a = JSON.parse(fileText);
            this.setState({dialogueJson:a});
        } catch(e) {
            console.error(e);
        }
    }
}

export default Dialogue;