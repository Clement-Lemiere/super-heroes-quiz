import React from 'react'
import Logout from '../LogOut'
import Quiz from '../Quiz'

const welcome = () => {
  return (
    <div className='quiz-bg'>
        <div className='container'>
            <Logout />
            <Quiz />
        </div>
    </div>
  )
}

export default welcome