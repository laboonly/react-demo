/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 4:25:22 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-19, 2:36:47 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import { combineReducers  } from "redux";
import todos from "./todos";
import visibilityFilter  from "./visibilityFilter";
import user from "./user"

// combineReducers 生成store树
const reducer = combineReducers(
    {
        todos,
        visibilityFilter,
        user
    }
)

export default reducer