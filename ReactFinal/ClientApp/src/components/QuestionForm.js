import React from 'react';
import './Components.css';
import { FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';

export class QuestionForm extends React.Component {
    displayName = QuestionForm.name

    constructor(props) {
        super(props);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleHeaderChange = this.handleHeaderChange.bind(this);
        this.buildJson = this.buildJson.bind(this);
        this.state = { header: '', body: '' };
    }

    getHeaderValidationState() {
        const length = this.state.header.length;
        if (length < 5) return 'error';
        else if (length > 4) return 'success';
        return null;
    }
    getBodyValidationState() {
        const length = this.state.body.length;
        if (length < 10) return 'error';
        else if (length > 9) return 'success';
        return null;
    }

    handleHeaderChange(e) {
        this.setState({ header: e.target.value });
    }
    handleBodyChange(e){
        this.setState({ body: e.target.value });
    }

    buildJson() {
        if (this.getHeaderValidationState() === 'success' && this.getBodyValidationState() === 'success') {
            const data = {
                Header: this.state.header,
                Text: this.state.body
            }
            this.props.onClick(data);
        }
        

    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getHeaderValidationState()}
                >
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Question header"
                        onChange={this.handleHeaderChange}
                    />
                    <FormControl.Feedback />

                </FormGroup>
                <FormGroup
                    controlId="formControlsTextarea"
                    validationState={this.getBodyValidationState()}
                >
                    <FormControl
                        componentClass="textarea"
                        value={this.state.body}
                        placeholder="Question body"
                        onChange={this.handleBodyChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup>
                    <Button bsStyle="primary" onClick={this.buildJson}>Submit</Button>
                </FormGroup>
            </form>
        );
    }
}

