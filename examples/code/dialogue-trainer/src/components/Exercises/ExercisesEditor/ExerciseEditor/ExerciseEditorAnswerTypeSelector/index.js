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
import React from "react"
import { v4 as uuidv4 } from 'uuid';

import './style.scss'

class ExerciseEditorAnswerTypeSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    render() {

        let multipleUuid = uuidv4();
        let singularUuid = uuidv4();
        let answerTypeUuid = uuidv4();

        return (
            <div className="exercise-editor-answer-type-selector row">
                <div className="exercise-editor-answer-type-selector-multiple col-sm-3">
                    <label className="form-check-label" htmlFor={multipleUuid}>Multiple</label>
                    &nbsp;&nbsp;
                    <input className="form-check-input" checked={this.props.answerType === "multiple"} onChange={(e) => this.props.onAnswerTypeChange("multiple")} type="radio" name={"answerTypeSelector" + answerTypeUuid} id={multipleUuid} />
                </div>
                <div className="exercise-editor-answer-type-selector-singular col-sm-5">
                    <input className="form-check-input" checked={this.props.answerType === "singular"} onChange={(e) => this.props.onAnswerTypeChange("singular")} type="radio" name={"answerTypeSelector" + answerTypeUuid}  id={singularUuid} />
                    &nbsp;&nbsp;
                    <label className="form-check-label" htmlFor={singularUuid}>Singular</label>
                </div>
                <div className="col-sm-7"></div>
            </div>
        )

    }

}

export default ExerciseEditorAnswerTypeSelector;