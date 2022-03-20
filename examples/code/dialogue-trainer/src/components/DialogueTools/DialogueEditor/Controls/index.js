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


import { FaTimes } from 'react-icons/fa';
import { FcInfo } from 'react-icons/fc';
import { IconContext } from "react-icons";
import {AiTwotoneFolderOpen, AiOutlineDownload} from 'react-icons/ai';
import {readFile, downloadJson} from '../../../../util/FileUtils';

class Controls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            base64: "",
            dialogue: {
                title: "",
                lines : []
            }
        };
        this.fileInputRef = React.createRef();
    }

    render() {
        return (
            <div className="dialogue-editor-controls dialogue-editor-material-design-hover">
                <div className="row">
                    <div className="col-sm-3 controls-buttons-wrapper">
                        <button onClick={this.props.addRow}
                                type="button"
                                className="btn btn-primary">
                            Add row
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => this.fileInputRef.current.click()}
                                type="button"
                                className="btn btn-primary">
                            <AiTwotoneFolderOpen className="dialogue-controls-load-button" />
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => downloadJson(this.props.dialogue.title, this.props.dialogue)}
                                type="button"
                                className="btn btn-primary">
                            <AiOutlineDownload className="dialogue-controls-download-button" />
                        </button>
                        <input type='file' ref={this.fileInputRef} className="file-input" onChange={() => readFile(this.fileInputRef, this.processFileContents)} />
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-9 controls-input-wrapper">
                                <input onChange={(e) => this.props.updateTitle(e.target.value)}
                                    type="text"
                                    className="form-control title-input"
                                    placeholder="Title"
                                    value={this.props.title} />
                                <div className="base64-info-icon-wrapper">
                                    <input onChange={(e) => this.props.onChangeBase64(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Base64 dialogue"
                                            value={this.props.base64 } />
                                    <IconContext.Provider value={{ size: "25px", className: "base64-info-icon" }}>
                                        <FcInfo onClick={this.onBase64InfoButtonClick} />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!!this.state.showBase64InfoModal &&
                    <ReactModal isOpen={this.state.showBase64InfoModal}
                            portalClassName="dialogue-editor-controls-outer"
                            className="dialogue-modal-inner"
                            ariaHideApp={false}>
                        <FaTimes className="dialogue-modal-close-button-icon" onClick={() => this.setState({showBase64InfoModal: false})} />
                        <p className="dialogue-editor-controls-modal-innertext">
                            The Base64 string is the JSON object that represents this dialogue you are editing.
                            <br /><br />
                            This string makes it easy for you to share it with anyone. Anyone having this string can just
                            copy paste into this field and will have your current dialogue.
                        </p>
                    </ReactModal>
                }
            </div>
        )
    }

    onBase64InfoButtonClick = (e) => {
        this.setState({showBase64InfoModal: true});
    }

    processFileContents = (fileText) => {
        try {
            let a = JSON.parse(fileText);
            this.props.updateDialogue(a);
        } catch(e) {
            console.error(e);
        }
    }
}

export default Controls;