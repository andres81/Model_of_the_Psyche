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
import {withRouter} from "react-router-dom";

import * as FC_Icons from 'react-icons/fc'
import * as FA_Icons from 'react-icons/fa'
import * as AI_Icons from 'react-icons/ai'
import * as GI_Icons from 'react-icons/gi'
import * as GO_Icons from 'react-icons/go'
import * as IO_Icons from 'react-icons/io5'
import * as CG_Icons from 'react-icons/cg'
import * as MD_Icons from 'react-icons/md'
import * as RI_Icons from 'react-icons/ri'

import SideNav from "../../../SideNav"
import MenuItem from "../../../SideNav/MenuItem"

import nav from './nav.js'

import './style.scss';

class Nav extends React.Component {

    render() {
        return (
            <SideNav>
                {this.createMenuItems(nav.menuItems)}
                <hr />
                <br /><br />
            </SideNav>
        )
    }

    createMenuItems = (menuItems) => {
        return menuItems.map((item, index) => {
            return this.createMenuItem(item, index);
        });
    }

    createMenuItem = (item,  index) => {
        if (item && item.type === "hr") {
            return <hr key={index} />
        } else if (item && item.children && item.children.length > 0) {
            return <MenuItem key={index} title={item.label} icon={this.getIcon(item.icon)}>
                {this.createMenuItems(item.children)}
            </MenuItem>
        } else {
            return <MenuItem key={index} title={item.label} icon={this.getIcon(item.icon)} onClick={this.createOnClick(item)}/>
        }
    }

    getIcon = (name) => {
        if (name && name.length > 0) {
            const IconComponent = RI_Icons[name] || MD_Icons[name] || FC_Icons[name] || FA_Icons[name] || AI_Icons[name] || GI_Icons[name] || IO_Icons[name] || GO_Icons[name] || CG_Icons[name];
            return <IconComponent />;
        }
    }

    createOnClick = (item) => {
        if (item.path && item.path.length > 0) {
            return () => this.props.history.push(item.path)
        } else if (item.windowOpen && item.windowOpen.length > 0) {
            return ()=> window.open(item.windowOpen, "_blank")
        }
    }
}

export default withRouter(Nav);