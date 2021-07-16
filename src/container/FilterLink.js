/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-16 10:50:09 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-16, 10:50:09 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import { connect } from "react-redux";
import { setVisibilityFilter } from "../reducers/actions";
import Link from '../components/TodoList/Link'


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onclick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink