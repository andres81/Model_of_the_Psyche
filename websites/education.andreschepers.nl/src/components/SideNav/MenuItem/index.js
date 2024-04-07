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

import React from 'react';

import './style.scss';

class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isMenuOpen: false};
    }

    render() {

        let hasChildren = this.props.children;
        let classNames = "sidenav-menuitem" + (this.state.isMenuOpen ? " open" : "");

        return (
            <div className={classNames} onClick={this.menuClicked}>
                <div className="menu-item-wrapper">
                    {this.props.icon &&
                        <span className="menu-item-icon-wrapper">
                            <span className="menu-item-icon">{this.props.icon}</span>
                        </span>
                    }
                    <span className="menu-title">{this.props.title}</span>
                    {hasChildren &&
                        <span className="menu-arrow-wrapper">
                            <span className="menu-arrow"></span>
                        </span>}
                </div>
                {hasChildren &&
                    <div className="sub-menu-items-container">
                          {this.props.children}
                    </div>}
            </div>
        )
    }

    menuClicked = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (this.props.children) {
            this.setState({isMenuOpen: !this.state.isMenuOpen});
        } else if (this.props.onClick) {
            this.props.onClick();
        }
    }


}

export default MenuItem;