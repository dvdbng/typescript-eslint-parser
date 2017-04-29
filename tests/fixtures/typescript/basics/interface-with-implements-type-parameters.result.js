module.exports = {
    "type": "Program",
    "range": [
        0,
        39
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 1
        }
    },
    "body": [
        {
            "type": "TSInterfaceDeclaration",
            "range": [
                0,
                39
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            },
            "typeParameters": {
                "type": "TypeParameterDeclaration",
                "range": [
                    13,
                    16
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 13
                    },
                    "end": {
                        "line": 1,
                        "column": 16
                    }
                },
                "params": [
                    {
                        "type": "TypeParameter",
                        "range": [
                            14,
                            15
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 14
                            },
                            "end": {
                                "line": 1,
                                "column": 15
                            }
                        },
                        "name": "T",
                        "constraint": null
                    }
                ]
            },
            "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "range": [
                    35,
                    39
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 35
                    },
                    "end": {
                        "line": 3,
                        "column": 1
                    }
                }
            },
            "id": {
                "type": "Identifier",
                "range": [
                    10,
                    13
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 10
                    },
                    "end": {
                        "line": 1,
                        "column": 13
                    }
                },
                "name": "Foo"
            },
            "implements": [
                {
                    "type": "TSInterfaceImplements",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 28
                        },
                        "end": {
                            "line": 1,
                            "column": 31
                        }
                    },
                    "range": [
                        28,
                        31
                    ],
                    "id": {
                        "type": "Identifier",
                        "range": [
                            28,
                            31
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 28
                            },
                            "end": {
                                "line": 1,
                                "column": 31
                            }
                        },
                        "name": "Bar"
                    },
                    "typeParameters": {
                        "type": "TypeParameterInstantiation",
                        "range": [
                            31,
                            34
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 31
                            },
                            "end": {
                                "line": 1,
                                "column": 34
                            }
                        },
                        "params": [
                            {
                                "type": "GenericTypeAnnotation",
                                "range": [
                                    32,
                                    33
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 32
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 33
                                    }
                                },
                                "id": {
                                    "type": "Identifier",
                                    "range": [
                                        32,
                                        33
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 32
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 33
                                        }
                                    },
                                    "name": "J"
                                },
                                "typeParameters": null
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "Keyword",
            "value": "interface",
            "range": [
                0,
                9
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            }
        },
        {
            "type": "Identifier",
            "value": "Foo",
            "range": [
                10,
                13
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 10
                },
                "end": {
                    "line": 1,
                    "column": 13
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "<",
            "range": [
                13,
                14
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            }
        },
        {
            "type": "Identifier",
            "value": "T",
            "range": [
                14,
                15
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 14
                },
                "end": {
                    "line": 1,
                    "column": 15
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ">",
            "range": [
                15,
                16
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 16
                }
            }
        },
        {
            "type": "Keyword",
            "value": "implements",
            "range": [
                17,
                27
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 17
                },
                "end": {
                    "line": 1,
                    "column": 27
                }
            }
        },
        {
            "type": "Identifier",
            "value": "Bar",
            "range": [
                28,
                31
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 28
                },
                "end": {
                    "line": 1,
                    "column": 31
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "<",
            "range": [
                31,
                32
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 31
                },
                "end": {
                    "line": 1,
                    "column": 32
                }
            }
        },
        {
            "type": "Identifier",
            "value": "J",
            "range": [
                32,
                33
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 32
                },
                "end": {
                    "line": 1,
                    "column": 33
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ">",
            "range": [
                33,
                34
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 33
                },
                "end": {
                    "line": 1,
                    "column": 34
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                35,
                36
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 36
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                38,
                39
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            }
        }
    ]
};
