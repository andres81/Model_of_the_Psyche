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

import React from 'react';

import {FaBars} from "react-icons/fa";

import './style.scss'

class SideNav extends React.Component {

    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.state = {};
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {

        let classNames = "side-nav" + (!this.state.menuToggled ? " collapsed" : "");

        return (
            <div ref={this.wrapperRef} className={classNames}>
                <button type="button" onClick={this.toggleMenu} className="btn btn-primary menu-toggle-button"><FaBars /></button>
                <hr />
                <div className="side-nav-inner">
                    {this.props.children}
                </div>
            </div>
        );
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            if (this.state.menuToggled) {
                this.setState({menuToggled: false})
            }
        }
    }

    toggleMenu = () => {
        this.setState({menuToggled: !this.state.menuToggled});
    }
};

export default SideNav;