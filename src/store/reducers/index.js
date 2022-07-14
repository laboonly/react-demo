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