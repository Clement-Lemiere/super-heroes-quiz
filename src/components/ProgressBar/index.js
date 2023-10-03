import React, { Fragment } from 'react'

const ProgressBar = () => {
    return (
        <Fragment>
            <div className='percentage'>
                <div className='progressPercent'>Questions: 1/10</div>
                <div className='progressPercent'>Progression: 10%</div>
            </div>
            <div className='progressBar'>
                <div className='progressBarChange'></div>
            </div>
        </Fragment >
    )
}

export default ProgressBar