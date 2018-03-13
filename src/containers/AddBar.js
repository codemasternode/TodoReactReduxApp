import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';
import { Col, Button, Form, FormGroup, Label, Input, FormTextn } from 'reactstrap';

class AddBar extends React.Component {

    constructor() {
        super();
        this.state = {
            term: ''
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    change(e) {
        this.setState({ term: e.target.value })
    }

    submit(e) {
        e.preventDefault()
        if (this.state.term != '') {
            this.props.addTodo(this.state.term);
            this.setState({ term: '' })
        }
    }

    render() {
        return (
            <Form onSubmit={this.submit}>
                <FormGroup row>
                    <Input type="text" placeholder="Enter new todo" value={this.state.term} id="inp" onChange={this.change} />
                </FormGroup>
                <FormGroup check row>
                    <Button color="primary" type="submit">Submit!!!</Button>
                </FormGroup>
            </Form>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddBar)