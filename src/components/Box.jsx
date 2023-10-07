import React from 'react'
import './home.scss'
import { AiOutlineQq } from 'react-icons/ai'
import { safePositions } from '../userMatrics/path'

function Box({ active = [], boxNo }) {

    return (
        <div className={`pawn_box d-flex justify-content-center align-items-center ${safePositions.includes(boxNo) && 'safe_pawn_bg'}`}>
            {/* {boxNo} */}
            {active?.length > 0 && active.map(pawn => {
                return <div className='pawn'>
                    <span className='pawnNo'>
                        {pawn.pawnNo}
                    </span>
                    <AiOutlineQq color={pawn.user.color} />
                </div>
            })}
        </div>
    )
}

export default Box
