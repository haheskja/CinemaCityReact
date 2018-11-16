import React from 'react';
import './Components.css';
import { Glyphicon, Media } from 'react-bootstrap';

export class QuestionElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { upvoted: false, downvoted: false, viewrating: this.props.rating };
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);

    }

    upvote() {
        if (!this.state.upvoted) {
            const rating = {
                Id: this.props.id,
                IncrementBy: 0
            }
            if (this.state.downvoted) {
                rating.IncrementBy = 2;
            }
            else {
                rating.IncrementBy = 1;
            }
            QuestionElement.updateRating(rating);
            let rating2 = this.props.rating;
            rating2++;
            this.setState({ upvoted: true, downvoted: false, viewrating: rating2 });
        }
        else {
            const rating = {
                Id: this.props.id,
                IncrementBy: -1
            }
            QuestionElement.updateRating(rating);
            let rating2 = this.props.rating;
            this.setState({ upvoted: false, downvoted: false, viewrating: rating2 });
        }
    }

    downvote() {
        if (!this.state.downvoted) {
            const rating = {
                Id: this.props.id,
                IncrementBy: 0
            }
            if (this.state.upvoted) {
                rating.IncrementBy = -2;
            }
            else {
                rating.IncrementBy = -1;
            }
            QuestionElement.updateRating(rating);
            let rating2 = this.props.rating;
            rating2--;
            this.setState({ upvoted: false, downvoted: true, viewrating: rating2 });
        }
        else {
            const rating = {
                Id: this.props.id,
                IncrementBy: 1
            }
            QuestionElement.updateRating(rating);
            let rating2 = this.props.rating;
            this.setState({ upvoted: false, downvoted: false, viewrating: rating2 });
        }
    }

    static updateRating(rating) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(rating),
        };

        const request = new Request('api/Question/' + rating.Id, options);
        fetch(request);
    }

    render() {

        let isUpvoted = this.state.upvoted ?
            <Glyphicon glyph='arrow-up' style={{ color: '#FF8b60' }} /> :
            <Glyphicon glyph='arrow-up' />;
        let isDownvoted = this.state.downvoted ?
            <Glyphicon glyph='arrow-down' style={{ color: '#9494FF' }} /> :
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
