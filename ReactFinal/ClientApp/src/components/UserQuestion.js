﻿import React from 'react';
import './Components.css';
import { Media } from 'react-bootstrap';




export class UserQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.renderQuestion = this.renderQuestion.bind(this);


    }

    renderQuestion() {
        return (
            <div className="userQuestionBox">
                <Media>
                    <Media.Left align="top">
                        <div className="text-center">1</div>
                        </Media.Left>
                    <Media.Body>
                        <Media.Heading>{this.props.header}</Media.Heading>
                        <p>
                            {this.props.text}
                        </p>
                    </Media.Body>
                </Media>
            </div>

            );
    
        }
    
    render() {
        let contents = !this.props.hasAsked
            ? null
            : this.renderQuestion();
        return (
            <div>
                {contents}
            </div>
        );
    }
}