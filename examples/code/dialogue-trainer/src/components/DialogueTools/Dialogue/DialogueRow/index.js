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