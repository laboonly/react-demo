/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-16 10:13:05 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-19, 3:55:27 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */
// 容器组件筛选组件状态
import { connect } from "react-redux"
import { toggleTodo } from '../reducers/actions'
import TodoList from "../components/TodoList/index.js"

// 筛选可显示的列表
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
            return todos
        default:
            return todos
    }
}


const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList