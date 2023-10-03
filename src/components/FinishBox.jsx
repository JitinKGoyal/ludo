import React from 'react'

function FinishBox({ active }) {
    return (
        <div className={`finish_box ${active && 'active_box'}`}></div>
    )
}

export default FinishBox