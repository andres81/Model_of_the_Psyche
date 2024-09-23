/*
 * Copyright 2022 - 2024 André Schepers
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

import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Modal from 'react-modal';
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import PATHS from "./paths.js";

export default function ModalWrapper() {

    const [markdown, setMarkdown] = React.useState("");

    const customStyles = {
        content: {
            height: '90%',
            width: '90%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: "relative", border: "1px black"
        },
    };

    const closeButtonStyle = {
        position: "absolute",
        top: "0px",
        right: "30px",
        color: "black",
        fontSize: "4em",
        cursor: "pointer"
    };

    let pathName = useLocation().hash;
    let path = PATHS[pathName];

    useEffect(() => {
        loadRemoteData(path, (data) => {
            setMarkdown(data)
        });
    });

    const navigate = useNavigate();
    const onRequestDoClose = () => {
        navigate('/');
    }

    return (
        <>
            <Modal
                isOpen={!!path}
                onRequestClose={onRequestDoClose}
                style={customStyles}
                contentLabel="Example Modal">
                <span style={closeButtonStyle} onClick={onRequestDoClose}>
                    <i className="fas fa-times"></i>
                </span>
                <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </Modal>
        </>
    )
}

function loadRemoteData(path, callback) {

    if (!!!path) {
        return;
    }

    fetch(path)
        .then((result) => result.text())
        .then((data) => callback(data));
}
