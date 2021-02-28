import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import { actionRegisterUser } from '../../../config/redux/action';
import './Register.scss';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const res = await props.registerUser({ email, password });

        if (res) {
            setEmail('');
            setPassword('');
            const { history } = props;
            history.push('/login');
        }

    }

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <p className='auth-title'>Register</p>
                <Input
                    className='tes'
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    id='email'
                    placeholder='masukkan email'
                    value={email} />
                <Input
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    id='password'
                    placeholder='masukkan password'
                    value={password} />
                <Button title='Register' onClick={handleRegister} isLoading={props.isLoading} />
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