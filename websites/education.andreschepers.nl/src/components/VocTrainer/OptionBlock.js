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