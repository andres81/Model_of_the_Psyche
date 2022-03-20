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