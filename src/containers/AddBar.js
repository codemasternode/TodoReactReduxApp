import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';

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
        this.props.addTodo(this.state.term);
        this.setState({ term: '' })
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Todo</label>
                <input type="text" placeholder="Enter new todo" value={this.state.term} onChange={this.change} />
                <button type="submit">Submit!!!</button>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null,mapDispatchToProps)(AddBar)