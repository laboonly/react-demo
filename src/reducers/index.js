/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 4:25:22 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-13, 5:22:11 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import { combineReducers  } from "redux";
import todos from "./todos";
import visibilityFilter  from "./visibilityFilter";

const todoApp = combineReducers(
    {
        todos,
        visibilityFilter
    }
)

export default todoApp