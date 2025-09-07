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