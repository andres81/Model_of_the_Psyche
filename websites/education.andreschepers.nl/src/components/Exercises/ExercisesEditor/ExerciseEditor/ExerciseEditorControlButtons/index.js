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