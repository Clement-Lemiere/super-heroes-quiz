import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../Firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgetPassword = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email, success)
        .then(() => {
            setError(null);
            setSuccess(`Consultez votre email ${email} pour changer de mot de passe`);
            setEmail('');

            setTimeout(() => {
                navigate('/login');
            }, 55000);

        })
        .catch((error) => {
            setError(error);
            setEmail('');
        })
    }

    const disabled = email === '';

    return (
        <div className='signUpLoginBox'>
            <div className='slContainer'>
                <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                    {
                        success !== '' && <span>{success}</span>
                    }
                    {error !== '' && <span>{error}</span>}
                        <h2>Récupérer mon mot de passe</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleEmail} value={email} type="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <button type='submit' disabled={disabled}> Récupérer </button>
                        </form>
                        <div className='linkContainer'>
                            <Link className='simpleLink' to='/login'>Déjà inscrit? Connectez-vous!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword