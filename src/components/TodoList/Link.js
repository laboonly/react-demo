/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 6:00:13 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-13, 6:03:31 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
    if(active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="/"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

export default Link