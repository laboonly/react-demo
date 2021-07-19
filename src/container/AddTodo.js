/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-16 11:06:54 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-19, 2:34:45 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */
// 添加代办事项容器组件
import React from 'react'
import { connect } from 'react-redux'  // connect 将组件跟state链接
import { addTodo } from '../reducers/actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if(!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input 
                    ref={ node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo