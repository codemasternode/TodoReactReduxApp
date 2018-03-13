import React from 'react'
import { connect } from 'react-redux';

class TodoList extends React.Component {

    constructor() {
        super()
        this.renderList = this.renderList.bind(this)
    }

    renderList(todo) {
        if(!todo) {
            return null
        }

        return (
            <li key={todo}>{todo}</li>
        )

    }

    render() {
        return (
            <ul>
                {this.props.todos.map(this.renderList)}
            </ul>
        )
    }
}

function mapStateToProps({ todos }) {
    return { todos }
}

export default connect(mapStateToProps)(TodoList)