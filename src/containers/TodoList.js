import React from 'react'
import { connect } from 'react-redux';
import { Jumbotron, ListGroup, ListGroupItem, Container, Row, Col, Input } from 'reactstrap';

class TodoList extends React.Component {

    constructor() {
        super()
        this.renderList = this.renderList.bind(this)
    }

    renderList(todo) {
        if (!todo) {
            return null
        }

        let done = todo.done.toString();

        return (
            <ListGroupItem key={todo}>
                    <Row>
                        <Col xs="10" sm="10" md="10" lg="10">
                            {todo.name}
                        </Col>
                        <Col xs="2" sm="2" md="2" lg="2">
                            <Input type="checkbox" value={todo.done} />
                        </Col>
                    </Row>
            </ListGroupItem>
        )

    }

    render() {
        return (
            <div className="content">
                <Jumbotron>
                    <ListGroup>
                        {this.props.todos.map(this.renderList)}
                    </ListGroup>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps({ todos }) {
    return { todos }
}

export default connect(mapStateToProps)(TodoList)