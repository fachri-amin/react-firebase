import { useState, useEffect } from 'react';
import auth_firebase from '../../../config/auth';
import { connect } from 'react-redux';
import './Register.scss';

const Register = (props) => {
    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <p className='auth-title'>Register {props.popup}</p>
                <input className='input' onChange={e => setEmail(e.target.value)} type="email" id='email' placeholder='masukkan email' />
                <input className='input' onChange={e => setPassword(e.target.value)} type="password" id='password' placeholder='masukkan password' />
                <button className='btn' onClick={() => auth_firebase(email, password)}>Register</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    popup: state.popup,
})

export default connect(mapStateToProps, null)(Register);