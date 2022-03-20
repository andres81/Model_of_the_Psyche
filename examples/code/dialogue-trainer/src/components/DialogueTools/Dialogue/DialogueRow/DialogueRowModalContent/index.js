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

class DialogueRowModalContent extends React.Component {

    render() {

        let translations = this.props.line.wordTranslations;
        let tableRows = [];
        let lineNr = 1;

        if (translations) {
            translations.forEach((pair, index) => {
                tableRows.push(
                    <tr key={index}>
                        <th scope="row">{lineNr}</th>
                        <td>{pair.left.text}</td>
                        <td>{pair.right.text}</td>
                    </tr>);
                ++lineNr;
            });
        }

        return (
            <div className="dialogue-row-modal-content-container">

                <h1>Line breakdown</h1>

                <br /><br />

                <p className="fw-bold fs-4 dialogue-modal-content-line">{this.props.line.text}</p>

                <p className="fw-bolder fs-4 dialogue-modal-content-line">{this.props.line.translation}</p>

                <br />

                <h2>Vocabulary</h2>

                <br />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Line word</th>
                            <th scope="col">Translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default DialogueRowModalContent;
