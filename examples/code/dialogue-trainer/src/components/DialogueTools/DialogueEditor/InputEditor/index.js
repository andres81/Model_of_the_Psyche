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

import EditorRow from './EditorRow';

import {DIALOGUE_EDITOR_ROW} from '../../constants.js'

class InputEditor extends React.Component {

    render() {
        return (
            <div className="dialogueeditoreditsection dialogueeditormaterialdesignhover">
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