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

import EditorRowWordTranslator from './EditorRowWordTranslator';
import EditorRowLineEditor from './EditorRowLineEditor';

class EditorRow extends React.Component {

    render() {
        return (
            <div className="row dialogue-editor-row dialogue-editor-material-design-hover">
                <EditorRowLineEditor {...this.props} />
                { this.props.row.text && this.props.row.text !== "" &&
                    <EditorRowWordTranslator
                        id={this.props.id}
                        row={this.props.row}
                        updateRow={this.props.updateRow} /> }
                <br /><br /><br />
            </div>
        )
    }

    updateWordTranslations = (value) => {
        this.props.updateWordTranslations(value);
    }
}

export default EditorRow;
