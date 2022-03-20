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

import TextareaAutosize from 'react-textarea-autosize';

import './style.scss';

class ManualEditing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {buffer: ""};
    }

    render() {

        let json = JSON.stringify(this.props.json, null, 4);
        let colorClass = "dialogue-manual-editor";
        if (this.state.useBuffer) {
            json = this.state.buffer;
            colorClass += " dialogue-manual-editor-error";
        }

        return (
            <div className="container">
                <TextareaAutosize className={colorClass} value={json} onChange={this.onChange}/>
            </div>
        )
    }

    onChange = (textareaEvent) => {
        try {
            let dialogue = JSON.parse(textareaEvent.target.value);
            this.props.updateDialogue(dialogue);
            this.setState({useBuffer: false});
        } catch (e) {
            this.setState({useBuffer: true, buffer: textareaEvent.target.value});
        }

    }
}

export default ManualEditing;