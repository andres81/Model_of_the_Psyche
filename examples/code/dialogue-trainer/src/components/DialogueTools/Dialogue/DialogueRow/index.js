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
import React from 'react';
import ReactModal from 'react-modal';

import {FcInfo} from 'react-icons/fc';
import {FaTimes, FaPlay} from 'react-icons/fa';

import DialogueRowModalContent from './DialogueRowModalContent';

import './style.scss'

class DialogueRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTranslation: false
        }
        this.audioRef = React.createRef();
    }

    render() {
        return (
            <div className={"row dialogue-row " + this.props.classes}>
                <div className="col-sm-2">
                    <p className="dialogue-name rounded">{this.props.line.personName}</p>
                </div>
                <div className="col">
                    <p className="text-start dialogue-text rounded">
                        <FcInfo onClick={this.onLineModalClick} className={"base64-info-icon"} />
                        {this.props.line.text}
                        <br />
                        {this.getTextTranslationElement()}
                        {this.createAudiobutton()}
                        {this.createAudioElement()}
                    </p>
                </div>
                <ReactModal isOpen={this.state.showLineModal}
                        className="modal-inner"
                        ariaHideApp={false}>
                    <FaTimes className="dialogue-modal-close-button-icon" onClick={() => this.setState({showLineModal: false})} />
                    <DialogueRowModalContent line={this.props.line} />
                </ReactModal>
            </div>
        );
    }

    createAudioElement = () => {
        if (!!this.props.line.audioSource) {
            return <audio ref={this.audioRef}>
                <source src={this.props.line.audioSource} type="audio/ogg" />
            </audio>
        }
    }

    createAudiobutton = () => {
        if (!!this.props.line.audioSource) {
            return <span onClick={() => this.audioRef.current.play()} className="dialogue-row-audio-play-button">
                <FaPlay />
            </span>
        }
    }

    onLineModalClick = () => {
        this.setState({showLineModal: true});
    }

    getTextTranslationElement() {
        return this.props.translationEnabled ? <span className="dialogue-text-translation text-start">{this.props.line.translation}</span> : null;
    }
}

export default DialogueRow;