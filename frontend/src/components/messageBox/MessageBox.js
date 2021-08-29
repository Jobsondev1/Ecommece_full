import React from 'react'

const MenssageBox = (props) => {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
        {props.children}
      </div>
    )
}

export default MenssageBox
