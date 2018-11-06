import React from 'react';
import './Components.css';
import { QuestionForm } from './QuestionForm';
import { QuestionElement } from './QuestionElement';
import { UserQuestion } from './UserQuestion';

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
        fetch('api/Service/GetQuestions')
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

        const request = new Request('api/Service/AddQuestion', options);
        const response = fetch(request);
        const status = response.status;
        this.setState({ userQuestHeader: data.Header, userQuestBody: data.Text, hasAsked: true });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Questions.renderQuestions(this.state.questions);
        return (
            <div>
                <h1>Questions</h1>
                <QuestionForm onClick={this.addQuestion} />
                <UserQuestion hasAsked={this.state.hasAsked} header={this.state.userQuestHeader} text={this.state.userQuestBody}/>
                {contents}
            </div>
        );
    }
}

