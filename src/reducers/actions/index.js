/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 4:26:13 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-19, 1:46:19 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */
// action创建函数，生成action的方法

let nextTodoId = 0;

// 添加todo的action
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

// 筛选显示的action
export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

// 切换todo列表action
export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}