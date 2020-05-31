import React, { Component } from 'react';

export default class Progress extends Component {
    render() {
        return (
            <div className="container-card">

                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>90<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                    <h2 className="text">HTML</h2>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>75<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                    <h2 className="text">S/CSS</h2>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>60<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                    <h2 className="text">JScript</h2>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>75<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                    <h2 className="text">Python</h2>
                </div>

            </div>
        );
    }
}