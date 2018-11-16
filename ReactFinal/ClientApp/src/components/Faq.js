import React from 'react';
import './Components.css';

class FaqElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showAnswer: false, };
        this.onClick = this.onClick.bind(this);
    }



    onClick() {
        this.setState({ showAnswer: !this.showAnswer });
        { this.state.showAnswer ? this.setState({ showAnswer: false }) : this.setState({ showAnswer: true }) };
    }

    render() {
        return (
            <div>
                <h2 className="faqStyle" onClick={this.onClick}>{this.props.question} </h2>
                {this.state.showAnswer ? <p className="faqAnswer">{this.props.answer}</p> : null}
            </div>
        );
    }
}

export class Faq extends React.Component {
    displayName = Faq.name

    constructor(props) {
        super(props);
        this.state = { faqs: [], loading: true };

        fetch('api/FAQ')
            .then(response => response.json())
            .then(data => {
                this.setState({ faqs: data, loading: false });
            });
    }

    static renderFaq(question, answer) {
        return <FaqElement question={question} answer={answer} />;
    }

    static renderFaqs(faqs) {
        return (
            <div>
                {faqs.map(faq =>
                    <div key={faq.id}>
                        {Faq.renderFaq(faq.question, faq.answer)}
                    </div>
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Faq.renderFaqs(this.state.faqs);

        return (
            <div>
                <h1>FAQ</h1>
                {contents}
            </div>
        );
    }
}

