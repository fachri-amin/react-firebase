import { useState, useEffect } from 'react';
import auth_firebase from '../../../config/auth';
import './Register.scss';

const Register = () => {
    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <p className='auth-title'>Register</p>
                <input className='input' onChange={e => setEmail(e.target.value)} type="email" id='email' placeholder='masukkan email' />
                <input className='input' onChange={e => setPassword(e.target.value)} type="password" id='password' placeholder='masukkan password' />
                <button className='btn' onClick={() => auth_firebase(email, password)}>Register</button>
            </div>
        </div>
    )
}

export default Register;