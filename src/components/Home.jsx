import React from 'react'
import './home.scss'

function Home({ color }) {
    return (
        <>
            <div className='home_prt' style={{ background: color }}>
                <div className='sec_box container h-100' >
                    <div className='row h-100 align-items-center m-0 ' style={{ background: 'white' }}>
                        <div className='col-6 h-50 p-0 d-flex justify-content-center align-items-center'>
                            <div className='dot m-3' style={{ background: color }}> </div>
                        </div>
                        <div className='col-6 h-50 p-0 d-flex justify-content-center align-items-center'>
                            <div className='dot m-3' style={{ background: color }}> </div>
                        </div>
                        <div className='col-6 h-50 p-0 d-flex justify-content-center align-items-center'>
                            <div className='dot m-3' style={{ background: color }}> </div>
                        </div>
                        <div className='col-6 h-50 p-0 d-flex justify-content-center align-items-center'>
                            <div className='dot m-3' style={{ background: color }}> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home