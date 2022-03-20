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
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

import './style.scss'

class ExerciseEditorControlButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <span className="exercise-editor-control-buttons">
                <FaPlus className="fa-plus" onClick={this.props.onAddQuestion} />
                &nbsp;&nbsp;
                <FaTrashAlt className="fa-trash-alt" onClick={this.props.onRemoveQuestion} />
            </span>
        )
    }
}

export default ExerciseEditorControlButtons;