import React, { useMemo, useState } from 'react'
import Home from '../components/Home'
import Box from '../components/Box'
import FinishBox from '../components/FinishBox'
import { pathMatrics } from '../userMatrics/path';

function LudoBoard() {

    const [user1, setUser1] = useState({
        pawns: [
            { position: 0 },
            { position: 0 },
            { position: 0 },
            { position: 0 },
        ],
        color: '#F61067'
    });

    const [user2, setUser2] = useState({
        pawns: [
            { position: 0 },
            { position: 0 },
            { position: 0 },
            { position: 0 },
        ],
        color: '#3891A6'
    });

    const [user3, setUser3] = useState({
        pawns: [
            { position: 0 },
            { position: 0 },
            { position: 0 },
            { position: 0 },
        ],
        color: '#7E2E84'
    });

    const [user4, setUser4] = useState({
        pawns: [
            { position: 0 },
            { position: 0 },
            { position: 0 },
            { position: 0 },
        ],
        color: '#00F0B5'
    });

    const u1Increase = (pawn_num) => {
        user1.pawns[pawn_num].position++;
        setUser1({ ...user1 });
    }

    const u2Increase = (pawn_num) => {
        user2.pawns[pawn_num].position++;
        setUser2({ ...user2 });
    }

    const u3Increase = (pawn_num) => {
        user3.pawns[pawn_num].position++;
        setUser3({ ...user3 });
    }

    const u4Increase = (pawn_num) => {
        user4.pawns[pawn_num].position++;
        setUser4({ ...user4 });
    }

    const activeBoxes = useMemo(() => {
        let arr = [];

        // USER 1
        arr[pathMatrics.USER1[user1.pawns[0].position]] = [user1]
        arr[pathMatrics.USER1[user1.pawns[1].position]] = arr[pathMatrics.USER1[user1.pawns[1].position]]?.concat(user1) || [user1]
        arr[pathMatrics.USER1[user1.pawns[2].position]] = arr[pathMatrics.USER1[user1.pawns[2].position]]?.concat(user1) || [user1]
        arr[pathMatrics.USER1[user1.pawns[3].position]] = arr[pathMatrics.USER1[user1.pawns[3].position]]?.concat(user1) || [user1]

        // USER 2
        arr[pathMatrics.USER2[user2.pawns[0].position]] = arr[pathMatrics.USER2[user2.pawns[0].position]]?.concat(user2) || [user2]
        arr[pathMatrics.USER2[user2.pawns[1].position]] = arr[pathMatrics.USER2[user2.pawns[1].position]]?.concat(user2) || [user2]
        arr[pathMatrics.USER2[user2.pawns[2].position]] = arr[pathMatrics.USER2[user2.pawns[2].position]]?.concat(user2) || [user2]
        arr[pathMatrics.USER2[user2.pawns[3].position]] = arr[pathMatrics.USER2[user2.pawns[3].position]]?.concat(user2) || [user2]

        // USER 3
        arr[pathMatrics.USER3[user3.pawns[0].position]] = arr[pathMatrics.USER3[user3.pawns[0].position]]?.concat(user3) || [user3]
        arr[pathMatrics.USER3[user3.pawns[1].position]] = arr[pathMatrics.USER3[user3.pawns[1].position]]?.concat(user3) || [user3]
        arr[pathMatrics.USER3[user3.pawns[2].position]] = arr[pathMatrics.USER3[user3.pawns[2].position]]?.concat(user3) || [user3]
        arr[pathMatrics.USER3[user3.pawns[3].position]] = arr[pathMatrics.USER3[user3.pawns[3].position]]?.concat(user3) || [user3]

        // USER 4
        arr[pathMatrics.USER4[user4.pawns[0].position]] = arr[pathMatrics.USER4[user4.pawns[0].position]]?.concat(user4) || [user4]
        arr[pathMatrics.USER4[user4.pawns[1].position]] = arr[pathMatrics.USER4[user4.pawns[1].position]]?.concat(user4) || [user4]
        arr[pathMatrics.USER4[user4.pawns[2].position]] = arr[pathMatrics.USER4[user4.pawns[2].position]]?.concat(user4) || [user4]
        arr[pathMatrics.USER4[user4.pawns[3].position]] = arr[pathMatrics.USER4[user4.pawns[3].position]]?.concat(user4) || [user4]



        // arr[pathMatrics.USER2[user2.position]] = arr[pathMatrics.USER2[user2.position]]?.concat(user2) || [user2];
        // arr[pathMatrics.USER3[user3.position]] = arr[pathMatrics.USER3[user3.position]]?.concat(user3) || [user3];
        // arr[pathMatrics.USER4[user4.position]] = arr[pathMatrics.USER4[user4.position]]?.concat(user4) || [user4];

        return arr;
    }, [user1, user2, user3, user4]);

    console.log(activeBoxes)

    return (
        <>
            <div className='w-fit shadow p-3 m-2'>

                {/* TOP BAR S*/}
                <div className='d-flex '>
                    <Home color='#F61067' />
                    <div>
                        <Box active={activeBoxes[10]} />
                        <Box active={activeBoxes[9]} />
                        <Box active={activeBoxes[8]} />
                        <Box active={activeBoxes[7]} />
                        <Box active={activeBoxes[6]} />
                        <Box active={activeBoxes[5]} />
                    </div>
                    <div>
                        <Box active={activeBoxes[11]} />
                        <Box active={activeBoxes[57]} />
                        <Box active={activeBoxes[58]} />
                        <Box active={activeBoxes[59]} />
                        <Box active={activeBoxes[60]} />
                        <Box active={activeBoxes[61]} />
                    </div>
                    <div>
                        <Box active={activeBoxes[12]} />
                        <Box active={activeBoxes[13]} />
                        <Box active={activeBoxes[14]} />
                        <Box active={activeBoxes[15]} />
                        <Box active={activeBoxes[16]} />
                        <Box active={activeBoxes[17]} />
                    </div>
                    <Home color='#3891A6' />
                </div>
                {/* TOP BAR S*/}

                {/* MIDDLE BAR S */}
                <div className='d-flex'>
                    <div>
                        <div className='d-flex'>
                            <Box active={activeBoxes[51]} />
                            <Box active={activeBoxes[0]} />
                            <Box active={activeBoxes[1]} />
                            <Box active={activeBoxes[2]} />
                            <Box active={activeBoxes[3]} />
                            <Box active={activeBoxes[4]} />
                        </div>
                        <div className='d-flex'>
                            <Box active={activeBoxes[50]} />
                            <Box active={activeBoxes[52]} />
                            <Box active={activeBoxes[53]} />
                            <Box active={activeBoxes[54]} />
                            <Box active={activeBoxes[55]} />
                            <Box active={activeBoxes[56]} />
                        </div>
                        <div className='d-flex'>
                            <Box active={activeBoxes[49]} />
                            <Box active={activeBoxes[48]} />
                            <Box active={activeBoxes[47]} />
                            <Box active={activeBoxes[46]} />
                            <Box active={activeBoxes[45]} />
                            <Box active={activeBoxes[44]} />
                        </div>
                    </div>

                    <FinishBox />

                    <div>
                        <div className='d-flex'>
                            <Box active={activeBoxes[18]} />
                            <Box active={activeBoxes[19]} />
                            <Box active={activeBoxes[20]} />
                            <Box active={activeBoxes[21]} />
                            <Box active={activeBoxes[22]} />
                            <Box active={activeBoxes[23]} />
                        </div>
                        <div className='d-flex'>
                            <Box active={activeBoxes[66]} />
                            <Box active={activeBoxes[65]} />
                            <Box active={activeBoxes[64]} />
                            <Box active={activeBoxes[63]} />
                            <Box active={activeBoxes[62]} />
                            <Box active={activeBoxes[24]} />
                        </div>
                        <div className='d-flex'>
                            <Box active={activeBoxes[30]} />
                            <Box active={activeBoxes[29]} />
                            <Box active={activeBoxes[28]} />
                            <Box active={activeBoxes[27]} />
                            <Box active={activeBoxes[26]} />
                            <Box active={activeBoxes[25]} />
                        </div>
                    </div>

                </div>
                {/* MIDDLE BAR E */}

                {/* THIRD BAR S */}
                <div className='d-flex'>

                    <Home color='#00F0B5' />
                    <div>
                        <Box active={activeBoxes[43]} />
                        <Box active={activeBoxes[42]} />
                        <Box active={activeBoxes[41]} />
                        <Box active={activeBoxes[40]} />
                        <Box active={activeBoxes[39]} />
                        <Box active={activeBoxes[38]} />
                    </div>
                    <div>
                        <Box active={activeBoxes[71]} />
                        <Box active={activeBoxes[70]} />
                        <Box active={activeBoxes[69]} />
                        <Box active={activeBoxes[68]} />
                        <Box active={activeBoxes[67]} />
                        <Box active={activeBoxes[37]} />
                    </div>
                    <div>
                        <Box active={activeBoxes[31]} />
                        <Box active={activeBoxes[32]} />
                        <Box active={activeBoxes[33]} />
                        <Box active={activeBoxes[34]} />
                        <Box active={activeBoxes[35]} />
                        <Box active={activeBoxes[36]} />
                    </div>
                    <Home color='#7E2E84' />
                </div>
                {/* THIRD BAR E */}
            </div>

            <div className='btn m-3 border' >
                <h6>1</h6>
                <button onMouseDown={() => u1Increase(0)} className='btn btn-outline-dark btn-sm'>1</button>
                <button onMouseDown={() => u1Increase(1)} className='btn btn-outline-dark btn-sm'>2</button>
                <button onMouseDown={() => u1Increase(2)} className='btn btn-outline-dark btn-sm'>3</button>
                <button onMouseDown={() => u1Increase(3)} className='btn btn-outline-dark btn-sm'>4</button>
            </div>

            <div className='btn m-3 border' >
                <h6>2</h6>
                <button onMouseDown={() => u2Increase(0)} className='btn btn-outline-dark btn-sm'>1</button>
                <button onMouseDown={() => u2Increase(1)} className='btn btn-outline-dark btn-sm'>2</button>
                <button onMouseDown={() => u2Increase(2)} className='btn btn-outline-dark btn-sm'>3</button>
                <button onMouseDown={() => u2Increase(3)} className='btn btn-outline-dark btn-sm'>4</button>
            </div>

            <div className='btn m-3 border' >
                <h6>3</h6>
                <button onMouseDown={() => u3Increase(0)} className='btn btn-outline-dark btn-sm'>1</button>
                <button onMouseDown={() => u3Increase(1)} className='btn btn-outline-dark btn-sm'>2</button>
                <button onMouseDown={() => u3Increase(2)} className='btn btn-outline-dark btn-sm'>3</button>
                <button onMouseDown={() => u3Increase(3)} className='btn btn-outline-dark btn-sm'>4</button>
            </div>

            <div className='btn m-3 border' >
                <h6>4</h6>
                <button onMouseDown={() => u4Increase(0)} className='btn btn-outline-dark btn-sm'>1</button>
                <button onMouseDown={() => u4Increase(1)} className='btn btn-outline-dark btn-sm'>2</button>
                <button onMouseDown={() => u4Increase(2)} className='btn btn-outline-dark btn-sm'>3</button>
                <button onMouseDown={() => u4Increase(3)} className='btn btn-outline-dark btn-sm'>4</button>
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
