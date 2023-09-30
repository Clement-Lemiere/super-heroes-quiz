import React from 'react'
import Batman from '../../images/batman.png'
import '../../App.css'
const ErrorPage = () => {
  return (
    <div className='quiz-bg'>
        <div className='container'>
            <h2 className='errorTitle'>Oups, cette page n'existe pas</h2>
            <img src={ Batman } alt='error page' className='errorImg'></img>
        </div>
    </div>
  )
}

export default ErrorPage