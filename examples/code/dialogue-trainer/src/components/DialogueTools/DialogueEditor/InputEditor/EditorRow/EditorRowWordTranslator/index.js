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
import { MdGTranslate } from 'react-icons/md';

class EditorRowWordTranslator extends React.Component {

    render() {

        let elems = this.getTranslationBlock();

        return (
            <div>
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={"panelsStayOpen-heading" + this.props.id}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#word-translations-collapse-" + this.props.id} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Word Translations
                            </button>
                        </h2>
                        <div id={"word-translations-collapse-" + this.props.id} className="accordion-collapse collapse" aria-labelledby={"panelsStayOpen-heading" + this.props.id}>
                            <div className="accordion-body dialogue-editor-word-translation-block">
                                <h4>Translations</h4>
                                {elems}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getTranslationBlock = () => {
        return this.props.row.wordTranslations.map((elem, index) => {
            return <div className="row dialogue-editor-word-translator-row" key={index}>
                <div className="col-4 text-end">
                    <label className="col-form-label">{elem.left.text}</label>
                    &nbsp;&nbsp;
                    <a target="_blank"
                        href={"https://translate.google.com/?hl=en&sl=auto&tl=en&text=" + elem.left.text + "&op=translate"}><MdGTranslate /></a>
                </div>
                <div className="col-6 text-start">
                    <input className="form-control " value={elem.right.text} onChange={(e) => this.onWordTranslationChange(e.target.value, index)} />
                </div>
            </div>
        });
    }

    onWordTranslationChange = (value, index) => {
        let row = _.cloneDeep(this.props.row);
        row.wordTranslations[index].right.text = value;
        this.props.updateRow(this.props.id, row);
    }
}

export default EditorRowWordTranslator;