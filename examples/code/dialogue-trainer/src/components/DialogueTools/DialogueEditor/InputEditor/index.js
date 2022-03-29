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
import _ from "lodash";
import {AiTwotoneFolderOpen} from 'react-icons/ai';
import EditorRow from './EditorRow';
import {readFileAsBase64} from '../../../../util/FileUtils';

import {DIALOGUE_EDITOR_ROW} from '../../constants.js'

class InputEditor extends React.Component {

    constructor(props) {
        super(props);

        this.fileInputRef = React.createRef();
    }

    render() {
        return (
            <div className="dialogue-editor-edit-section">
                <div className="row dialogue-editor-edit-section-audio-input">
                    <div>
                        <input value={this.props.youtubeEmbedId} onChange={(e) => this.props.onYoutubeEmbedId(e.target.value)} type={"text"} placeholder="Youtube Embed Id" />
                    </div>
                    <div className="audio-source-file-open-container">
                        <AiTwotoneFolderOpen className="audio-source-file-open" onClick={() => this.fileInputRef.current.click()} />
                        <input type='file' ref={this.fileInputRef} className="audio-file-input" onChange={() => readFileAsBase64(this.fileInputRef, (value) => this.props.onAudioChange(value))} />
                        <input value={this.props.audioSource} onChange={(e) => this.props.onAudioChange(e.target.value)} type={"text"} placeholder="Dialogue audio (ogg)" />
                    </div>
                </div>
                {this.createRows()}
            </div>
        )
    }

    createRows = () => {
        let rows = [];
        this.props.lines.forEach((row, index) =>
            rows.push(
                <EditorRow key={index}
                    id={index}
                    row={row}
                    updateRow={this.updateRow}
                    deleteRow={() => this.deleteRow(index)}
                    addRow={() => this.addRow(index)} />
            )
        );

        return rows;
    }

    updateRow = (index, row) => {
        let lines = _.cloneDeep(this.props.lines);
        lines[index] = _.cloneDeep(row);
        this.props.updateLines(lines);
    }

    addRow = (index) => {
        let lines = _.cloneDeep(this.props.lines);
        lines.splice(index+1, 0, _.cloneDeep(DIALOGUE_EDITOR_ROW));
        this.props.updateLines(lines);
    }

    deleteRow = (index) => {
        let lines = _.cloneDeep(this.props.lines);
        lines.splice(index, 1);
        this.props.updateLines(lines);
    }
}

export default InputEditor;