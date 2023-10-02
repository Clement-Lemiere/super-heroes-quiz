import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase';



const LogOut = () => {
    
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    
    
    useEffect(() => {
        if (checked) {
            setTimeout(() => {
                signOut(auth)
                .then(() => {
                    navigate('/');
                })
            }, 1000)
        }
    }, [checked, navigate])

    const handleLogOut = e => {
        setChecked(e.target.checked);
            
    }
    

    return (
        <form>     
            <div className='logoutContainer'>
                <label htmlFor="check" className='switch'>
                    <input type="checkbox" checked={checked} id='check' onChange={handleLogOut} />
                    <span className='slider round' datatype='Déconnexion'></span>
                </label>
            </div>
        </form>

    )
}

export default LogOut