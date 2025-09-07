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

const nav = {
    "menuItems": [
        {
            "label": "Home",
            "icon": "FcHome",
            "children": [],
            "path": "/",
            "windowOpen": ""
        },
        {
            "label": "Learning",
            "icon": "GiBrain",
            "children": [
                {
                    "label": "Language",
                    "icon": "IoLanguageOutline",
                    "children": [
                        {
                            "label": "Dutch",
                            "icon": "",
                            "children": [
                                {
                                    "label": "Words",
                                    "icon": "",
                                    "children": [
                                        {
                                            "label": "Greetings",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/dutch/words/greetings",
                                            "windowOpen": ""
                                        },
                                        {
                                            "label": "Colors",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/dutch/words/colors",
                                            "windowOpen": ""
                                        }, {
                                            "label": "Numbers 1 - 10",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/dutch/words/numbers1ToTen",
                                            "windowOpen": ""
                                        },
                                        {
                                            "label": "Numbers 11 - 20",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/dutch/words/numbers11To20",
                                            "windowOpen": ""
                                        },
                                        {
                                            "label": "Numbers 10 - 100",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/dutch/words/numbers10To100",
                                            "windowOpen": ""
                                        }
                                    ]
                                },
                                {
                                    "label": "Dialogue",
                                    "icon": "",
                                    "children": [
                                        {
                                            "label": "Greeting a friend",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/dutch/dialogue/greetingAFriend",
                                            "windowOpen": ""
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "French",
                            "icon": "",
                            "children": [
                                {
                                    "label": "Words",
                                    "icon": "",
                                    "children": [
                                        {
                                            "label": "Colors",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/french/words/colors",
                                            "windowOpen": ""
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "German",
                            "icon": "",
                            "children": [
                                {
                                    "label": "Words",
                                    "icon": "",
                                    "children": [
                                        {
                                            "label": "Colors",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/german/words/colors",
                                            "windowOpen": ""
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Spanish",
                            "icon": "",
                            "children": [
                                {
                                    "label": "Words",
                                    "icon": "",
                                    "children": [
                                        {
                                            "label": "Colors",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/spanish/words/colors",
                                            "windowOpen": ""
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Swedish",
                            "icon": "",
                            "children": [
                                {
                                    "label": "Words",
                                    "icon": "",
                                    "children": [
                                        {
                                            "label": "Colors",
                                            "icon": "",
                                            "children": [],
                                            "path": "/learning/language/swedish/words/colors",
                                            "windowOpen": ""
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "IT",
                    "icon": "FaComputer",
                    "children": [
                        {
                            "label": "HTTP",
                            "icon": "TbWorldWww",
                            "windowOpen": "https://github.com/andres81/software-engineering-training-and-examples/blob/main/http-tutorial/README.md"
                        },
                        {
                            "label": "Database",
                            "icon": "FaDatabase",
                            "windowOpen": "https://github.com/andres81/software-engineering-training-and-examples/blob/main/database-relational-tutorial/README.md"
                        },
                        {
                            "label": "Java",
                            "icon": "FaJava",
                            "children": [
                                {
                                    "label": "SE / EE",
                                    "icon": "FaJava",
                                    "windowOpen": "https://github.com/andres81/software-engineering-training-and-examples/blob/main/java-tutorials/java-se-ee-tutorial/README.md"
                                },
                                {
                                    "label": "HTTP",
                                    "icon": "FaJava",
                                    "windowOpen": "https://github.com/andres81/software-engineering-training-and-examples/blob/main/java-tutorials/java-http-tutorial/README.md"
                                },
                                {
                                    "label": "Database",
                                    "icon": "FaJava",
                                    "children": [
                                        {
                                            "label": "JDBC",
                                            "icon": "FaJava",
                                            "windowOpen": "https://github.com/andres81/software-engineering-training-and-examples/blob/main/java-tutorials/java-database-tutorials/java-jdbc-tutorial/README.md"
                                        },
                                        {
                                            "label": "JPA",
                                            "icon": "FaJava",
                                            "windowOpen": "https://github.com/andres81/software-engineering-training-and-examples/blob/main/java-tutorials/java-database-tutorials/java-jpa-tutorial/README.md"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "label": "Sluipschutters",
            "icon": "",
            "children": [
                {
                    "label": "Introduction",
                    "icon": "",
                    "children": [],
                    "path": "/information/sluipschutters/introduction_sluipschutters",
                    "windowOpen": ""
                }, {
                    "label": "Doet u deze maar",
                    "icon": "",
                    "children": [],
                    "path": "/learning/language/dutch/dialogue/Doet_u_deze_maar_Sluipschutters",
                    "windowOpen": ""
                }
            ]
        },
        {
            "label": "Paspoort voor Rusland",
            "icon": "",
            "children": [{
                "label": "Introduction",
                "icon": "",
                "children": [],
                "path": "/information/paspoort-voor-rusland/paspoort_voor_rusland_introduction",
                "windowOpen": ""
            },
                {
                    "label": "Hoofdstuk 6",
                    "icon": "",
                    "children": [
                        {
                            "label": "Dialoog 1.1",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/paspoort_voor_rusland_hfd6_dlg1",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 1.2",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/paspoort_voor_rusland_hfd6_dlg2",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 1.3",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/paspoort_voor_rusland_hfd6_dlg3",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 1.4",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/paspoort_voor_rusland_hfd6_dlg4",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2.1",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/paspoort_voor_rusland_hfd6_dlg2_1",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2.2",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/paspoort_voor_rusland_hfd6_dlg2_2",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2.3",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/paspoort_voor_rusland_hfd6_dlg2_3",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2.4",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/paspoort_voor_rusland_hfd6_dlg2_4",
                            "windowOpen": ""
                        }
                    ]
                },
                {
                    "label": "Hoofdstuk 7",
                    "icon": "",
                    "children": [
                        {
                            "label": "Dialoog 1",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter7/paspoort_voor_rusland_hfd7_dlg1",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter7/paspoort_voor_rusland_hfd7_dlg2",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 3",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter7/paspoort_voor_rusland_hfd7_dlg3",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 4",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter7/paspoort_voor_rusland_hfd7_dlg4",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 5",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter7/paspoort_voor_rusland_hfd7_dlg5",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 6",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter7/paspoort_voor_rusland_hfd7_dlg6",
                            "windowOpen": ""
                        }
                    ]
                },
                {
                    "label": "Hoofdstuk 9",
                    "icon": "",
                    "children": [
                        {
                            "label": "Dialoog 1.1",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter9/paspoort_voor_rusland_hfd9_dlg1_1",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 1.2",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter9/paspoort_voor_rusland_hfd9_dlg1_2",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2.1",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter9/paspoort_voor_rusland_hfd9_dlg2_1",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2.2",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter9/paspoort_voor_rusland_hfd9_dlg2_2",
                            "windowOpen": ""
                        }
                    ]
                },
                {
                    "label": "Hoofdstuk 10",
                    "icon": "",
                    "children": [
                        {
                            "label": "Dialoog 1",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter10/paspoort_voor_rusland_hfd10_dlg1",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter10/paspoort_voor_rusland_hfd10_dlg2",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 3",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter10/paspoort_voor_rusland_hfd10_dlg3",
                            "windowOpen": ""
                        }
                    ]
                },
                {
                    "label": "Hoofdstuk 11",
                    "icon": "",
                    "children": [
                        {
                            "label": "Dialoog 1",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter11/paspoort_voor_rusland_hfd11_dlg1",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 2",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter11/paspoort_voor_rusland_hfd11_dlg2",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 3",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter11/paspoort_voor_rusland_hfd11_dlg3",
                            "windowOpen": ""
                        },
                        {
                            "label": "Dialoog 4",
                            "icon": "",
                            "children": [],
                            "path": "/learning/language/russian/dialogue/chapter11/paspoort_voor_rusland_hfd11_dlg4",
                            "windowOpen": ""
                        }
                    ]
                }]
        }, {
            "label": "Vocabulary trainer",
            "icon": "FaClipboardList",
            "children": [],
            "path": "/vocabularytrainer",
            "windowOpen": ""
        }, {
            "label": "Dialogue trainer",
            "icon": "MdOutlineSpeakerNotes",
            "children": [],
            "path": "/dialoguetrainer",
            "windowOpen": ""
        }, {
            "label": "Dialogue editor",
            "icon": "RiFileEditLine",
            "children": [],
            "path": "/dialogueeditor",
            "windowOpen": ""
        }, {
            "type": "hr"
        }, {
            "label": "Github",
            "icon": "FaGithub",
            "children": [],
            "path": "",
            "windowOpen": "https://www.github.com/andres81"
        }, {
            "label": "Contact",
            "icon": "AiOutlineMail",
            "children": [],
            "path": "",
            "windowOpen": "mailto:contact.andreschepers.eu@gmail.com"
        }, {
            "label": "Images from Unsplash",
            "icon": "AiFillFileImage",
            "children": [],
            "windowOpen": "https://unsplash.com/"
        }, {
            "type": "hr"
        }, {
            "label": "Privacy Policy",
            "icon": "GoLaw",
            "children": [],
            "path": "",
            "windowOpen": "/privacypolicy.html"
        }, {
            "label": "Terms and Conditions",
            "icon": "CgFileDocument",
            "children": [],
            "path": "",
            "windowOpen": "/termsandconditions.html"
        }
    ]
};

export default nav;