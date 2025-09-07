/*
 * Copyright 2024 - 2025 André Schepers
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
import React from "react";
import {FaMusic, FaAlignCenter, FaAlignLeft, FaAlignRight, FaListUl} from 'react-icons/fa';
import {FcInfo} from 'react-icons/fc';

import {StateUpdateType} from 'react-vocabulary-trainer'

class Menu extends React.Component {

    levelChosen = (level) => {
        this.props.setLevel(level);
    }

    render() {

        let classNames = "btn btn-secondary menu-button level-button";
        let levels = [];
        let currentClassNames;
        for (let i=0;i<3;++i) {
            currentClassNames = classNames;
            if (i === this.props.level) {
                currentClassNames += " active";
            }
            levels.push(<button key={i} onClick={() => this.levelChosen(i)} type="button" className={currentClassNames}>{i}</button>);
        }

        let queryTypeText = this.props.queryType === StateUpdateType.QUERY_TYPE.TEXT;
        let queryTypeSound = !queryTypeText;
        let optionsColumnSideLeft = this.props.optionsColumn === StateUpdateType.COLUMN_SIDE.LEFT;
        let optionsColumnSideRight = !optionsColumnSideLeft;
        let queryColumnSideLeft = this.props.queryColumn === StateUpdateType.COLUMN_SIDE.LEFT;
        let queryColumnSideRight = !queryColumnSideLeft;

        return (
            <div className="menu-container">
                <div className="btn-group btn-group-sm" role="group">
                    {this.createButton(() => this.props.setQueryType(StateUpdateType.QUERY_TYPE.TEXT), queryTypeText, <FaAlignCenter />)}
                    {this.createButton(() =>  this.props.setQueryType(StateUpdateType.QUERY_TYPE.SOUND), queryTypeSound, <FaMusic />)}
                </div>
                {this.createNbspElement()}
                {this.props.optionInputType !== StateUpdateType.INPUT_TYPES.TYPING &&
                    <div className="btn-group btn-group-sm" role="group">
                        {levels}
                    </div>}
                {this.createNbspElement()}
                <div className="btn-group btn-group-sm" role="group">
                    {this.createButton(() => this.props.setQueryColumn(StateUpdateType.COLUMN_SIDE.LEFT), queryColumnSideLeft, <FaAlignLeft />, "Query column")}
                    {this.createButton(() => this.props.setQueryColumn(StateUpdateType.COLUMN_SIDE.RIGHT), queryColumnSideRight, <FaAlignRight />, "Query column")}
                </div>
                {this.createNbspElement()}
                <div className="btn-group btn-group-sm" role="group">
                    {this.createButton(() => this.props.setOptionsColumn(StateUpdateType.COLUMN_SIDE.LEFT), optionsColumnSideLeft, <FaAlignLeft />, "Answer column")}
                    {this.createButton(() => this.props.setOptionsColumn(StateUpdateType.COLUMN_SIDE.RIGHT), optionsColumnSideRight, <FaAlignRight />, "Answer column")}
                </div>
                {this.createNbspElement()}
                {this.createButton(() => this.props.toggleOverview(), false, <FaListUl />, "Practice")}
            </div>
        )
    }

    createNbspElement = () => {
        return <span> </span>
    }

    createButton = (clickHandler, active, reactIcon, tooltipText) => {
        return <button onClick={clickHandler}
                title={tooltipText}
                type="button"
                className={
                    "btn btn-secondary menu-button menu-button-selectable btn-sm" + (active ? " active": "")
                }>
            {reactIcon}
        </button>
    }

    createInfoButton = () => {
        return <button type="button"
                onClick={() => this.props.onlineModalClick}
                className={
                    "btn btn-secondary menu-button menu-button-selectable btn-sm vocabulary-trainer-info-container"
                }>
            <FcInfo className="vocabulary-trainer-info" />
        </button>
    }
}

export default Menu;