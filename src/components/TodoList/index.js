/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 5:34:13 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-13, 6:15:37 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from 'react'
import PropTypes from 'prop-types'

import Todo from './todo'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map( todo => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />   
        ))}
    </ul>
)

TodoList.propType = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList