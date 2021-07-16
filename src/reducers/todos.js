/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 4:34:52 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-13, 4:39:42 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, 
                {
                    id: action.id,
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
            )
        default:
            return state
    }
}

export default todos