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

import {FaMusic} from 'react-icons/fa'

import {StateUpdateType} from 'react-vocabulary-trainer'

class QueryBlock extends React.Component {

    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }

    render() {

        const{queryType, query} = this.props;

        return (
            <div className="exercise_query">
                {this.createQuery(queryType, query)}
            </div>
        )
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.queryType === StateUpdateType.QUERY_TYPE.SOUND &&
                this.props.query !== prevProps.query) {
            this.audioRef.current.load()
            this.audioRef.current.play();
        }
    };

    playAudio = () => {
        this.audioRef.current.play();
    }

    createQuery = (queryType, query) => {
        if (queryType === StateUpdateType.QUERY_TYPE.SOUND) {
            return <div>
                <button onClick={this.playAudio} className="btn btn-success "><FaMusic /></button>
                <audio ref={this.audioRef}>
                    <source src={query} type="audio/ogg" />
                </audio>
            </div>
        }
        return <span className="exercise_query_text">{query}</span>
    }
}

export default QueryBlock;