import React, { Fragment, useEffect, useState } from 'react'
import Logout from '../LogOut'
import Quiz from '../Quiz'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase'

const Welcome = () => {

  const navigate = useNavigate();
  const [userSession,setUserSession] = useState(null);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, user => {
      user ? setUserSession(user) : navigate('/')
    })
    return listener;
  }, [])
    

  return userSession === null ? (
    <Fragment>
      <div className='loader'></div>
      <p className='loaderText'>Loading ...</p>
    </Fragment>
  ) : (
    <div className='quiz-bg'>
        <div className='container'>
            <Logout />
            <Quiz />
        </div>
    </div>
  )

  
  
}

export default Welcome