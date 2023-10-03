import React from 'react'
import './home.scss'
import { AiOutlineQq } from 'react-icons/ai'

function Box({ active = [] }) {

    return (
        <div className={`pawn_box d-flex justify-content-center align-items-center`}>
            {active?.length > 0 && active.map(user => {
                return <AiOutlineQq color={user.color} />
            })}
        </div>
    )
}

export default Box
