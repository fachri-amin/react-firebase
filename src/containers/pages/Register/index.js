import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { actionRegisterUser } from '../../../config/redux/action';
import './Register.scss';

const Register = (props) => {
    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <p className='auth-title'>Register</p>
                <input className='input' onChange={e => setEmail(e.target.value)} type="email" id='email' placeholder='masukkan email' />
                <input className='input' onChange={e => setPassword(e.target.value)} type="password" id='password' placeholder='masukkan password' />
                <Button title='Register' onClick={() => props.registerUser({ email, password })} isLoading={props.isLoading} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    registerUser: (data) => dispatch(actionRegisterUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);