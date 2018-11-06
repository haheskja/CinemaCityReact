import React from 'react';
import './Components.css';
import { Glyphicon, Media } from 'react-bootstrap';

//TODO: If you first upvote and then downvote, you will first send an upvote to server and then a downvote, basically negating each other. Needs to be fixed


export class QuestionElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { upvoted: false, downvoted: false, viewrating: this.props.rating };
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);

    }

    upvote() {
        if (!this.state.upvoted) {
            if (this.state.downvoted) {
                QuestionElement.upvoteTwiceToDatabase(this.props.id);
            }
            else {
                QuestionElement.upvoteToDatabase(this.props.id);
            }
            let rating2 = this.props.rating;
            rating2++;
            this.setState({ upvoted: true, downvoted: false, viewrating: rating2 });
        }
        else {
            QuestionElement.downvoteToDatabase(this.props.id);
            let rating2 = this.props.rating;
            this.setState({ upvoted: false, downvoted: false, viewrating: rating2 });
        }
    }

    downvote() {
        if (!this.state.downvoted) {
            if (this.state.upvoted) {
                QuestionElement.downvoteTwiceToDatabase(this.props.id);
            }
            else {
                QuestionElement.downvoteToDatabase(this.props.id);
            }
            let rating2 = this.props.rating;
            rating2--;
            this.setState({ upvoted: false, downvoted: true, viewrating: rating2 });
        }
        else {
            QuestionElement.upvoteToDatabase(this.props.id);
            let rating2 = this.props.rating;
            this.setState({ upvoted: false, downvoted: false, viewrating: rating2 });
        }
    }

    static upvoteToDatabase(id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(id),
        };

        const request = new Request('api/Service', options);
        const response = fetch(request);
        const status = response.status;
    }
    static upvoteTwiceToDatabase(id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(id),
        };

        const request = new Request('api/Service/Add2Rating', options);
        const response = fetch(request);
        const status = response.status;
    }

    static downvoteToDatabase(id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(id),
        };

        const request = new Request('api/Service/RemoveRating', options);
        const response = fetch(request);
        const status = response.status;
    }
    static downvoteTwiceToDatabase(id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(id),
        };

        const request = new Request('api/Service/Remove2Rating', options);
        const response = fetch(request);
        const status = response.status;
    }



    render() {

        let isUpvoted = this.state.upvoted ?
            <Glyphicon glyph='arrow-up' style={{ color: '#ffc107' }} /> :
            <Glyphicon glyph='arrow-up' />;
        let isDownvoted = this.state.downvoted ?
            <Glyphicon glyph='arrow-down' style={{ color: '#af320f' }} /> :
            <Glyphicon glyph='arrow-down' />;
        return (
            <div className="questionBox">
                <Media>
                    <Media.Left align="top">
                        <div className="text-center" onClick={this.upvote}>{isUpvoted}</div>
                        <div className="text-center">{this.state.viewrating}</div>
                        <div className="text-center" onClick={this.downvote}>{isDownvoted}</div>
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
}
