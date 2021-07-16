/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 5:23:13 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-13, 5:29:59 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from 'react'
import PropTypes from 'prop-types'


const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
       {text} 
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo