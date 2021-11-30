/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 4:44:18 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-13, 5:19:07 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

// 筛选能显示todo列表
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter