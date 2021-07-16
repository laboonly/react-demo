/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 4:26:13 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-13, 4:29:34 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

let nextTodoId = 0;

// 添加todo列表
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

// 筛选显示的列表
export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

// 切换todo列表显示状态
export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}