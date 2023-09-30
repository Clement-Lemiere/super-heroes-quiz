import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase';


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('')




  useEffect(() => {
    if (email !== '' && password.length > 5) {
      setBtn(true);
    }
    else if (btn) {
      setBtn(false);

    }
  }, [email, password, btn]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        setEmail('');
        setPassword('');
        navigate('/welcome', { replace: true });
      })
      .catch(error => {
        setError(error);
        setEmail('');
        setPassword('');
      })

  }


  return (
    <div className='signUpLoginBox'>
      <div className='slContainer'>
        <div className="formBoxLeftLogin">
        </div>
        <div className="formBoxRight">
          <div className="formContent">

            {error !== '' && <span>{error.message}</span>}

            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input onChange={handleEmail} value={email} type="email" autoComplete="off" required />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input onChange={handlePassword} value={password} type="password" autoComplete="off" required />
                <label htmlFor="password">Mot de passe</label>
              </div>

              {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
            </form>
            <div className='linkContainer'>
              <Link className='simpleLink' to='/signUp'>Nouveau sur Marvel-Quiz? Inscrivez-vous!!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login