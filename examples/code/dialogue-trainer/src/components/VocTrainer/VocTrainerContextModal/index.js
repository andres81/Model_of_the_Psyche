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
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom';
import {FaTimes} from "react-icons/fa";

import _ from "lodash";

import './style.scss'

const LEFT_TEXT = "LEFT_TEXT";
const RIGHT_TEXT = "RIGHT_TEXT";
const LEFT_SOUND = "LEFT_SOUND";
const RIGHT_SOUND = "RIGHT_SOUND";

class VocTrainerContextModal extends React.Component {

    render() {

        let tableRows = [];
        let leftColumnValues = [];
        let rightColumnValues = [];
        let leftColumnAudio = [];
        let rightColumnAudio = [];

        if (this.props.loadedVocabulary && this.props.loadedVocabulary.pairs) {
            this.props.loadedVocabulary.pairs.forEach((pair, index) => {
                tableRows.push(
                    <tr key={index}>
                        <td>{pair.left.text}</td>
                        <td>{pair.right.text}</td>
                    </tr>);
                leftColumnValues.push(pair.left.text);
                leftColumnAudio.push(pair.left.sound ? pair.left.sound : "");
                rightColumnValues.push(pair.right.text);
                rightColumnAudio.push(pair.right.sound ? pair.right.sound : "");
            });
        }

        return (

            <ReactModal isOpen={this.props.overviewSet}
                    portalClassName="dialogue-voc-exercise-modal-bg"
                    ariaHideApp={false} >

                <FaTimes className="dialogue-modal-close-button-icon" onClick={() => this.props.onClose()} />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Line word</th>
                            <th scope="col">Translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>

                <br /><br />

                <div className="vocabulary-trainer-column-inputs">
                    <h1>Editor</h1>
                    <br />
                    <div className="row justify-content-md-center">
                        <div className="col-sm-6">
                            <textarea className="vocabulary-trainer-bulk-input vocabulary-trainer-bulk-input-left"
                                onChange={(e) => {this.updateVoc(LEFT_TEXT, e.target.value)}}
                                value={this.stringArrayToNewLineString(leftColumnValues)} />
                        </div>
                        <div className="col-sm-6">
                            <textarea className="vocabulary-trainer-bulk-input vocabulary-trainer-bulk-input-right"
                                onChange={(e) => {this.updateVoc(RIGHT_TEXT, e.target.value)}}
                                value={this.stringArrayToNewLineString(rightColumnValues)} />
                        </div>
                    </div>
                    <br /><br />
                    <h3>Audio</h3>
                    <br />
                    <div className="row justify-content-md-center">
                        <div className="col-sm-6">
                            <textarea className="vocabulary-trainer-bulk-input vocabulary-trainer-bulk-input-left"
                                onChange={(e) => {this.updateVoc(LEFT_SOUND, e.target.value)}}
                                value={this.stringArrayToNewLineString(leftColumnAudio)} />
                        </div>
                        <div className="col-sm-6">
                            <textarea className="vocabulary-trainer-bulk-input vocabulary-trainer-bulk-input-right"
                                onChange={(e) => {this.updateVoc(RIGHT_SOUND, e.target.value)}}
                                value={this.stringArrayToNewLineString(rightColumnAudio)} />
                        </div>
                    </div>
                </div>

                <br /><br /><br />

                <div className="vocabulary-trainer-base64-container">
                    <h1>Base64 string</h1>
                    <h3>Used to share and load an exercise, {this.getLink()}</h3>
                    <br />
                    <textarea readOnly={true}
                        className="vocabulary-trainer-base64"
                        value={this.encodeBase64(JSON.stringify(this.props.loadedVocabulary))} />
                </div>

                <br /><br /><br />

            </ReactModal>
        )
    
    }

    updateVoc = (target, textAreaContents) => {

        let pairs = _.cloneDeep(this.props.loadedVocabulary.pairs);
        let valueArray = textAreaContents.split('\n');
        switch(target) {
            case LEFT_TEXT:
                pairs = this.testUpdateColumnTextAreaValues(pairs, valueArray, 'left', 'text');
                break;
            case RIGHT_TEXT:
                pairs = this.testUpdateColumnTextAreaValues(pairs, valueArray, 'right', 'text')
                break;
            case LEFT_SOUND:
                pairs = this.testUpdateColumnTextAreaValues(pairs, valueArray, 'left', 'sound')
                break;
            case RIGHT_SOUND:
                pairs = this.testUpdateColumnTextAreaValues(pairs, valueArray, 'right', 'sound')
                break;
            default:
                break;
        }
        let voc = this.props.loadedVocabulary;
        voc.pairs = pairs;
        this.props.onVocChange(voc);
    }

    testUpdateColumnTextAreaValues(pairs, valueArray, targetColumn, type) {
        pairs = _.cloneDeep(pairs);
        if (type !== 'sound' && valueArray.length > pairs.length) {
            let pair = {left: {text: "", sound: ""}, right: { text: "", sound: "" }};
            pairs = pairs.concat(Array(valueArray.length - pairs.length).fill(pair));
        }
        pairs.forEach((pair, index) => {
            if (index >= valueArray.length) {
                pair[targetColumn][type] = "";
            } else {
                pair[targetColumn][type] = valueArray[index];
            }
        });
        if (pairs.length > valueArray.length && type !== 'sound') {
            for (let i = pairs.length - 1; i >= valueArray.length; i--) {
                if (pairs[i][this.getOtherColumn(targetColumn)][type] === '' && i >= 5) {
                    pairs.splice(i, 1);
                }
            }
        }
        return pairs;
    }

    getOtherColumn = (thisColumn) => {
        return thisColumn === 'left' ? 'right' : 'left';
    }

    getLink = () => {
        let base64Str = this.encodeBase64(JSON.stringify(this.props.loadedVocabulary));

        return <Link to={"/learning/vocabularytrainer/"+base64Str}>link</Link>;
//        return <a target="_blank"
//            rel="noreferrer"
//            href={"http://www.andreschepers.eu/learning/vocabularytrainer/" + base64Str}>link</a>;
    }

    encodeBase64 = (string) => {
        return btoa(unescape(encodeURIComponent(string)));
    }

    stringArrayToNewLineString = (stringArray) => {
        return stringArray.join(",").replaceAll(",", "\n");
    }

}

export default VocTrainerContextModal;