/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-16 10:50:09 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-19, 2:34:47 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

// 得到当前过滤器并且渲染LINK

import { connect } from "react-redux";
import { setVisibilityFilter } from "../store/actions";
import Link from '../components/TodoList/Link'


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink