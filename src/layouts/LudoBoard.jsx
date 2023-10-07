import React, { useEffect, useMemo, useState } from 'react'
import Home from '../components/Home'
import Box from '../components/Box'
import FinishBox from '../components/FinishBox'
import { pathMatrics, safePositions } from '../userMatrics/path';

function LudoBoard() {

    const [user1, setUser1] = useState({
        _id: 'USER1',
        pawns: [
            { position: 0 },
            { position: 0 },
            { position: 0 },
            { position: 0 },
        ],
        color: '#F61067'
    });

    const [user2, setUser2] = useState({
        _id: 'USER2',
        pawns: [
            { position: 0 },
            { position: 0 },
            { position: 0 },
            { position: 0 },
        ],
        color: '#3891A6'
    });

    const [user3, setUser3] = useState({
        _id: 'USER3',
        pawns: [
            { position: 0 },
            { position: 0 },
            { position: 0 },
            { position: 0 },
        ],
        color: '#7E2E84'
    });

    const [user4, setUser4] = useState({
        _id: 'USER4',
        pawns: [
            { position: 0 },
            { position: 0 },
            { position: 0 },
            { position: 0 },
        ],
        color: '#00F0B5'
    });

    const getGloblePosition = (user, position) => {
        return pathMatrics[user][position];
    }

    const cutPawn = (userId, pawnNo) => {
        if (userId === user1._id) {
            user1.pawns[pawnNo].position = 0
            setUser1({ ...user1 })
        }

        if (userId === user2._id) {
            user2.pawns[pawnNo].position = 0
            setUser2({ ...user2 })
        }

        if (userId === user3._id) {
            user3.pawns[pawnNo].position = 0
            setUser3({ ...user3 })
        }

        if (userId === user4._id) {
            user4.pawns[pawnNo].position = 0
            setUser4({ ...user4 })
        }
    }

    const cutPawnForUser = (userId, existingPawns) => {
        switch (userId) {
            // USER 1
            case (user1._id):
                existingPawns.forEach(pawn => {
                    // Do not cut if same user's pawn come
                    if (pawn.user._id !== user1._id) {
                        if (pawn.user._id === user2._id) {
                            cutPawn(user2._id, pawn.pawnNo)
                        }
                        if (pawn.user._id === user3._id) {
                            cutPawn(user3._id, pawn.pawnNo)
                        }
                        if (pawn.user._id === user4._id) {
                            cutPawn(user4._id, pawn.pawnNo)
                        }
                    }
                })
                break;
            // USER 2
            case (user2._id):
                existingPawns.forEach(pawn => {
                    // Do not cut if same user's pawn come
                    if (pawn.user._id !== user2._id) {
                        if (pawn.user._id === user1._id) {
                            cutPawn(user1._id, pawn.pawnNo)
                        }
                        if (pawn.user._id === user3._id) {
                            cutPawn(user3._id, pawn.pawnNo)
                        }
                        if (pawn.user._id === user4._id) {
                            cutPawn(user4._id, pawn.pawnNo)
                        }
                    }
                })
                break;
            case (user3._id):
                existingPawns.forEach(pawn => {
                    // Do not cut if same user's pawn come
                    if (pawn.user._id !== user3._id) {
                        if (pawn.user._id === user1._id) {
                            cutPawn(user1._id, pawn.pawnNo)
                        }
                        if (pawn.user._id === user2._id) {
                            cutPawn(user2._id, pawn.pawnNo)
                        }
                        if (pawn.user._id === user4._id) {
                            cutPawn(user4._id, pawn.pawnNo)
                        }
                    }
                })
                break;
            case (user4._id):
                existingPawns.forEach(pawn => {
                    // Do not cut if same user's pawn come
                    if (pawn.user._id !== user4._id) {
                        if (pawn.user._id === user1._id) {
                            cutPawn(user1._id, pawn.pawnNo)
                        }
                        if (pawn.user._id === user2._id) {
                            cutPawn(user2._id, pawn.pawnNo)
                        }
                        if (pawn.user._id === user3._id) {
                            cutPawn(user3._id, pawn.pawnNo)
                        }
                    }
                })
                break;
            default:
        }
    }
    const activeBoxes = useMemo(() => {
        let arr = [];

        const getPawnData = (user, pawnNo) => {
            return {
                user,
                pawnNo
            }
        }

        // USER 1
        arr[pathMatrics.USER1[user1.pawns[0].position]] = [getPawnData(user1, 0)]
        arr[pathMatrics.USER1[user1.pawns[1].position]] = arr[pathMatrics.USER1[user1.pawns[1].position]]?.concat(getPawnData(user1, 1)) || [getPawnData(user1, 1)]
        arr[pathMatrics.USER1[user1.pawns[2].position]] = arr[pathMatrics.USER1[user1.pawns[2].position]]?.concat(getPawnData(user1, 2)) || [getPawnData(user1, 2)]
        arr[pathMatrics.USER1[user1.pawns[3].position]] = arr[pathMatrics.USER1[user1.pawns[3].position]]?.concat(getPawnData(user1, 3)) || [getPawnData(user1, 3)]

        // USER 2
        arr[pathMatrics.USER2[user2.pawns[0].position]] = arr[pathMatrics.USER2[user2.pawns[0].position]]?.concat(getPawnData(user2, 0)) || [getPawnData(user2, 0)]
        arr[pathMatrics.USER2[user2.pawns[1].position]] = arr[pathMatrics.USER2[user2.pawns[1].position]]?.concat(getPawnData(user2, 1)) || [getPawnData(user2, 1)]
        arr[pathMatrics.USER2[user2.pawns[2].position]] = arr[pathMatrics.USER2[user2.pawns[2].position]]?.concat(getPawnData(user2, 2)) || [getPawnData(user2, 2)]
        arr[pathMatrics.USER2[user2.pawns[3].position]] = arr[pathMatrics.USER2[user2.pawns[3].position]]?.concat(getPawnData(user2, 3)) || [getPawnData(user2, 3)]

        // USER 3
        arr[pathMatrics.USER3[user3.pawns[0].position]] = arr[pathMatrics.USER3[user3.pawns[0].position]]?.concat(getPawnData(user3, 0)) || [getPawnData(user3, 0)]
        arr[pathMatrics.USER3[user3.pawns[1].position]] = arr[pathMatrics.USER3[user3.pawns[1].position]]?.concat(getPawnData(user3, 1)) || [getPawnData(user3, 1)]
        arr[pathMatrics.USER3[user3.pawns[2].position]] = arr[pathMatrics.USER3[user3.pawns[2].position]]?.concat(getPawnData(user3, 2)) || [getPawnData(user3, 2)]
        arr[pathMatrics.USER3[user3.pawns[3].position]] = arr[pathMatrics.USER3[user3.pawns[3].position]]?.concat(getPawnData(user3, 3)) || [getPawnData(user3, 3)]

        // USER 4
        arr[pathMatrics.USER4[user4.pawns[0].position]] = arr[pathMatrics.USER4[user4.pawns[0].position]]?.concat(getPawnData(user4, 0)) || [getPawnData(user4, 0)]
        arr[pathMatrics.USER4[user4.pawns[1].position]] = arr[pathMatrics.USER4[user4.pawns[1].position]]?.concat(getPawnData(user4, 1)) || [getPawnData(user4, 1)]
        arr[pathMatrics.USER4[user4.pawns[2].position]] = arr[pathMatrics.USER4[user4.pawns[2].position]]?.concat(getPawnData(user4, 2)) || [getPawnData(user4, 2)]
        arr[pathMatrics.USER4[user4.pawns[3].position]] = arr[pathMatrics.USER4[user4.pawns[3].position]]?.concat(getPawnData(user4, 3)) || [getPawnData(user4, 3)]

        return arr;
    }, [user1, user2, user3, user4]);

    const u1Increase = (pawn_num) => {
        let newPosition = ++user1.pawns[pawn_num].position;
        let newGloblePosition = getGloblePosition(user1._id, newPosition)

        if (!safePositions.includes(newGloblePosition)) {

            let existingPawns = activeBoxes[newGloblePosition]
            if (existingPawns?.length > 0) {
                cutPawnForUser(user1._id, existingPawns)
            }
        }

        setUser1({ ...user1 });
    }

    const u2Increase = (pawn_num) => {
        let newPosition = ++user2.pawns[pawn_num].position;
        let newGloblePosition = getGloblePosition(user2._id, newPosition)

        if (!safePositions.includes(newGloblePosition)) {

            let existingPawns = activeBoxes[newGloblePosition]
            if (existingPawns?.length > 0) {
                cutPawnForUser(user2._id, existingPawns)
            }
        }
        setUser2({ ...user2 });
    }

    const u3Increase = (pawn_num) => {
        let newPosition = ++user3.pawns[pawn_num].position;
        let newGloblePosition = getGloblePosition(user3._id, newPosition)

        if (!safePositions.includes(newGloblePosition)) {

            let existingPawns = activeBoxes[newGloblePosition]
            if (existingPawns?.length > 0) {
                cutPawnForUser(user3._id, existingPawns)
            }
        }
        setUser3({ ...user3 });
    }

    const u4Increase = (pawn_num) => {
        let newPosition = ++user4.pawns[pawn_num].position;
        let newGloblePosition = getGloblePosition(user4._id, newPosition)

        if (!safePositions.includes(newGloblePosition)) {

            let existingPawns = activeBoxes[newGloblePosition]
            if (existingPawns?.length > 0) {
                cutPawnForUser(user4._id, existingPawns)
            }
        }
        setUser4({ ...user4 });
    }

    return (
        <>

            <div className='d-flex justify-content-center'>

                {/* Control Buttons for USER 1, 4  Starts */}
                <div className='d-flex flex-column justify-content-between'>
                    <div className='btn m-3 border' >
                        <h6>USER 1</h6>
                        <button onMouseDown={() => u1Increase(0)} className='btn btn-outline-dark btn-sm'>1</button>
                        <button onMouseDown={() => u1Increase(1)} className='btn btn-outline-dark btn-sm'>2</button>
                        <button onMouseDown={() => u1Increase(2)} className='btn btn-outline-dark btn-sm'>3</button>
                        <button onMouseDown={() => u1Increase(3)} className='btn btn-outline-dark btn-sm'>4</button>
                    </div>

                    <div className='btn m-3 border' >
                        <h6>USER 4</h6>
                        <button onMouseDown={() => u4Increase(0)} className='btn btn-outline-dark btn-sm'>1</button>
                        <button onMouseDown={() => u4Increase(1)} className='btn btn-outline-dark btn-sm'>2</button>
                        <button onMouseDown={() => u4Increase(2)} className='btn btn-outline-dark btn-sm'>3</button>
                        <button onMouseDown={() => u4Increase(3)} className='btn btn-outline-dark btn-sm'>4</button>
                    </div>
                </div>
                {/* Control Buttons for USER 1, 4  Ends */}

                <div className='w-fit shadow p-3 m-2'>

                    {/* TOP BAR S*/}
                    <div className='d-flex '>
                        <Home color='#F61067' />
                        <div>
                            <Box active={activeBoxes[10]} boxNo={10} />
                            <Box active={activeBoxes[9]} boxNo={9} />
                            <Box active={activeBoxes[8]} boxNo={8} />
                            <Box active={activeBoxes[7]} boxNo={7} />
                            <Box active={activeBoxes[6]} boxNo={6} />
                            <Box active={activeBoxes[5]} boxNo={5} />
                        </div>
                        <div>
                            <Box active={activeBoxes[11]} boxNo={11} />
                            <Box active={activeBoxes[57]} boxNo={57} />
                            <Box active={activeBoxes[58]} boxNo={58} />
                            <Box active={activeBoxes[59]} boxNo={59} />
                            <Box active={activeBoxes[60]} boxNo={60} />
                            <Box active={activeBoxes[61]} boxNo={61} />
                        </div>
                        <div>
                            <Box active={activeBoxes[12]} boxNo={12} />
                            <Box active={activeBoxes[13]} boxNo={13} />
                            <Box active={activeBoxes[14]} boxNo={14} />
                            <Box active={activeBoxes[15]} boxNo={15} />
                            <Box active={activeBoxes[16]} boxNo={16} />
                            <Box active={activeBoxes[17]} boxNo={17} />
                        </div>
                        <Home color='#3891A6' />
                    </div>
                    {/* TOP BAR S*/}

                    {/* MIDDLE BAR S */}
                    <div className='d-flex'>
                        <div>
                            <div className='d-flex'>
                                <Box active={activeBoxes[51]} boxNo={51} />
                                <Box active={activeBoxes[0]} boxNo={10} />
                                <Box active={activeBoxes[1]} boxNo={1} />
                                <Box active={activeBoxes[2]} boxNo={2} />
                                <Box active={activeBoxes[3]} boxNo={3} />
                                <Box active={activeBoxes[4]} boxNo={4} />
                            </div>
                            <div className='d-flex'>
                                <Box active={activeBoxes[50]} boxNo={50} />
                                <Box active={activeBoxes[52]} boxNo={52} />
                                <Box active={activeBoxes[53]} boxNo={53} />
                                <Box active={activeBoxes[54]} boxNo={54} />
                                <Box active={activeBoxes[55]} boxNo={55} />
                                <Box active={activeBoxes[56]} boxNo={56} />
                            </div>
                            <div className='d-flex'>
                                <Box active={activeBoxes[49]} boxNo={49} />
                                <Box active={activeBoxes[48]} boxNo={48} />
                                <Box active={activeBoxes[47]} boxNo={47} />
                                <Box active={activeBoxes[46]} boxNo={46} />
                                <Box active={activeBoxes[45]} boxNo={45} />
                                <Box active={activeBoxes[44]} boxNo={44} />
                            </div>
                        </div>

                        <FinishBox />

                        <div>
                            <div className='d-flex'>
                                <Box active={activeBoxes[18]} boxNo={18} />
                                <Box active={activeBoxes[19]} boxNo={19} />
                                <Box active={activeBoxes[20]} boxNo={20} />
                                <Box active={activeBoxes[21]} boxNo={21} />
                                <Box active={activeBoxes[22]} boxNo={22} />
                                <Box active={activeBoxes[23]} boxNo={23} />
                            </div>
                            <div className='d-flex'>
                                <Box active={activeBoxes[66]} boxNo={66} />
                                <Box active={activeBoxes[65]} boxNo={65} />
                                <Box active={activeBoxes[64]} boxNo={64} />
                                <Box active={activeBoxes[63]} boxNo={63} />
                                <Box active={activeBoxes[62]} boxNo={62} />
                                <Box active={activeBoxes[24]} boxNo={24} />
                            </div>
                            <div className='d-flex'>
                                <Box active={activeBoxes[30]} boxNo={30} />
                                <Box active={activeBoxes[29]} boxNo={29} />
                                <Box active={activeBoxes[28]} boxNo={28} />
                                <Box active={activeBoxes[27]} boxNo={27} />
                                <Box active={activeBoxes[26]} boxNo={26} />
                                <Box active={activeBoxes[25]} boxNo={25} />
                            </div>
                        </div>

                    </div>
                    {/* MIDDLE BAR E */}

                    {/* THIRD BAR S */}
                    <div className='d-flex'>

                        <Home color='#00F0B5' />
                        <div>
                            <Box active={activeBoxes[43]} boxNo={43} />
                            <Box active={activeBoxes[42]} boxNo={42} />
                            <Box active={activeBoxes[41]} boxNo={41} />
                            <Box active={activeBoxes[40]} boxNo={40} />
                            <Box active={activeBoxes[39]} boxNo={39} />
                            <Box active={activeBoxes[38]} boxNo={38} />
                        </div>
                        <div>
                            <Box active={activeBoxes[71]} boxNo={71} />
                            <Box active={activeBoxes[70]} boxNo={70} />
                            <Box active={activeBoxes[69]} boxNo={69} />
                            <Box active={activeBoxes[68]} boxNo={68} />
                            <Box active={activeBoxes[67]} boxNo={67} />
                            <Box active={activeBoxes[37]} boxNo={37} />
                        </div>
                        <div>
                            <Box active={activeBoxes[31]} boxNo={31} />
                            <Box active={activeBoxes[32]} boxNo={32} />
                            <Box active={activeBoxes[33]} boxNo={33} />
                            <Box active={activeBoxes[34]} boxNo={34} />
                            <Box active={activeBoxes[35]} boxNo={35} />
                            <Box active={activeBoxes[36]} boxNo={36} />
                        </div>
                        <Home color='#7E2E84' />
                    </div>
                    {/* THIRD BAR E */}
                </div>

                {/* Control Buttons for USER 2, 3  Starts */}
                <div className='d-flex flex-column justify-content-between'>

                    <div className='btn m-3 border' >
                        <h6>USER 2</h6>
                        <button onMouseDown={() => u2Increase(0)} className='btn btn-outline-dark btn-sm'>1</button>
                        <button onMouseDown={() => u2Increase(1)} className='btn btn-outline-dark btn-sm'>2</button>
                        <button onMouseDown={() => u2Increase(2)} className='btn btn-outline-dark btn-sm'>3</button>
                        <button onMouseDown={() => u2Increase(3)} className='btn btn-outline-dark btn-sm'>4</button>
                    </div>


                    <div className='btn m-3 border' >
                        <h6>USER 3</h6>
                        <button onMouseDown={() => u3Increase(0)} className='btn btn-outline-dark btn-sm'>1</button>
                        <button onMouseDown={() => u3Increase(1)} className='btn btn-outline-dark btn-sm'>2</button>
                        <button onMouseDown={() => u3Increase(2)} className='btn btn-outline-dark btn-sm'>3</button>
                        <button onMouseDown={() => u3Increase(3)} className='btn btn-outline-dark btn-sm'>4</button>
                    </div>

                </div>
                {/* Control Buttons for USER 2, 3 Ends */}
            </div>
        </>
    )
}

export default LudoBoard



// FIRST ALGO STARTS

// const diff = 13;
// const user2Origin = diff;
// const loopLength = 52;
// const finalBarSize = 5;
// const user3Origin = diff * 2;
// const user4Origin = diff;

// const increase1 = () => {
//     user1.position++;
//     if (user1.position === 51) {
//         user1.position = 1001;
//     }

//     setUser1({ ...user1 });
// }

// const increase2 = () => {
//     user2.position++;
//     if (user2.position === 64) {
//         user2.position = 1006;
//     }

//     setUser2({ ...user2 });
// }

// // Action calculation for one box.
// // We are considering every user starting from its origin 0.
// // Origins are at distance 13 from each other.
// const activeBox = (boxNum) => {
//     let arr = [];

//     if (user1.position > 1000) {
//         if (user1.position === boxNum) {
//             arr.push(user1);
//         }
//     } else {
//         if ((user1.position) % loopLength === boxNum) {
//             arr.push(user1)
//         }
//     }

//     if (user2.position > 1000) {
//         if (user2.position === boxNum) {
//             arr.push(user2);
//         }

//     } else {
//         if ((user2.position) % loopLength === boxNum) {
//             arr.push(user2);
//         }
//     }

//     return arr;
// }

// const activeBoxes = useMemo(() => {
//     let arr = [];
//     for (let i = 0; i < loopLength; i++) {
//         arr.push(activeBox(i));
//     }
//     for (let i = 1001; i < 1020; i++) {
//         arr.push(activeBox(i));
//     }
//     return arr;
// }, [user1.position, user2.position]);

// FIRST ALGO ENDS

