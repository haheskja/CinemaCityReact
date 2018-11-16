import React from 'react';
import './Components.css';
import { QuestionForm } from './QuestionForm';
import { QuestionElement } from './QuestionElement';
import { Alert } from 'react-bootstrap';


export class Questions extends React.Component {
    displayName = Questions.name

    constructor(props) {
        super(props);
        this.state = { questions: [], loading: true, hasAsked: false };
        this.addQuestion = this.addQuestion.bind(this);
        this.getQuestions = this.getQuestions.bind(this);
        this.getQuestions();
    }

    getQuestions() {
        fetch('api/Question')
            .then(response => response.json())
            .then(data => {
                this.setState({ questions: data, loading: false });
            });
    }

    static renderQuestions(questions) {
        return (
            <div>
                {questions.map(question =>
                    <div key={question.id}>
                        <QuestionElement id={question.id} header={question.header} text={question.text} rating={question.rating} />
                    </div>
                )}
            </div>
        );
    }

    addQuestion(data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        };

        const request = new Request('api/Question', options);
        fetch(request)
            .then(response => response.json())
            .then(data => {
                this.setState({ questions: data, hasAsked: true  });
            });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Questions.renderQuestions(this.state.questions);
        let hasasked = this.state.hasAsked
            ? <Alert bsStyle="success">Question was added</Alert>
            : null;
        return (
            <div>
                <h1>Questions</h1>
                <QuestionForm onClick={this.addQuestion} />
                {hasasked}
                {contents}
            </div>
        );
    }
}

