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