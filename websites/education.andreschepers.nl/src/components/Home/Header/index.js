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

import React from 'react'
import {Route} from "react-router-dom";

import Nav from "./Nav";
import DialogueWrapper from './DialogueWrapper'
import DialogueTrainer from './DialogueTrainer'
import VocTrainerWrapper from "./VocTrainerWrapper";
import VocabularyTrainer from "./VocabularyTrainer";
import DialogueEditorWrapper from "./DialogueEditorWrapper";
import InformationView from "./InformationView";

import './style.scss'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="header">
                <Nav/>
                <Route path="/learning/language/:language/words/:wordClass" component={VocTrainerWrapper}/>
                <Route path="/learning/language/:language/dialogue/:dialogueName" component={DialogueWrapper}/>
                <Route path="/learning/language/:language/information/:informationName" component={InformationView}/>
                <Route path="/information/:category/:informationName" component={InformationView} />
                <Route exact path={"/vocabularytrainer*"} component={VocabularyTrainer}/>
                <Route exact path={"/dialoguetrainer*"} render={(props) => <DialogueTrainer {...props} showLoadSaveButtons={true} /> } />
                <Route exact path={"/dialogueeditor*"} component={DialogueEditorWrapper}/>

                <footer className="footer">
                    <small>
                        &copy; Copyright 2023-2024, André Schepers
                        &nbsp;-&nbsp;
                        <a href="/privacypolicy.html" rel="noreferrer" target="_blank">Privacy Policy</a>
                        &nbsp;-&nbsp;
                        <a href="/termsandconditions.html" target="_blank" rel="noreferrer">Terms and Conditions</a>
                    </small>
                </footer>
            </div>
        )
    }
}

export default Header;