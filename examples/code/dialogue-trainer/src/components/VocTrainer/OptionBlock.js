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
import React from 'react'
import PropTypes from 'prop-types';

class OptionBlock extends React.Component {

    render() {
        return (
            <div className="row exercise_options">
                {this.getTextOptions(this.props.optionTexts)}
            </div>
        )
    }

    optionClicked = (e) => {
        this.props.optionChosen(e.target.getAttribute('data-uid'));
    }

    getTextOptions = (optionTexts) => {
        let options = [];
        let index = 0;
        for (let entry of optionTexts) {
            options.push(this.createOption(index, entry[0], entry[1]));
            ++index;
        }
        return options;
    }

    createOption = (index, optionId, buttonText) =>  {
        return <div key={index} className={"col-sm-12"}>
            <div>
                <button onClick={this.optionClicked}
                        data-uid={optionId}
                        type="button"
                        className="btn btn-primary exercise_option_button">
                    {buttonText}
                </button>
            </div>
        </div>;
    }
}

OptionBlock.propTypes = {
    optionTexts: PropTypes.instanceOf(Map).isRequired
}

export default OptionBlock;