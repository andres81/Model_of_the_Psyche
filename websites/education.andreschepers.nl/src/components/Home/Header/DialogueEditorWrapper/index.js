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

import React from 'react'

import DialogueEditor from '../../../DialogueTools/DialogueEditor'

import './style.scss'

class DialogueEditorWrapper extends React.Component {

    render() {
        return (
            <div className="dialogue-editor-wrapper">
                <DialogueEditor base64={this.props.match.params.base64} onBase64Update={(newBase64) => {this.props.history.push("/learning/dialogueeditor/" + newBase64)}} />
            </div>
        )
    }
}

export default DialogueEditorWrapper;