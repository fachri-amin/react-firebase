import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { actionLoginUser } from '../../../config/redux/action'
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import './Login.scss';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const res = await props.loginUser({ email, password }).catch(err => err);
        if (res) {
            const { history } = props;
            setEmail('');
            setPassword('');
            history.push('/dashboard');
        }
        else {
            console.log('login invalid');
        }
    }

    return (
        <div className='auth-container'>
            <div className="auth-card">
                <p className='auth-title'>Login</p>
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
                <Button title='Register' onClick={handleLogin} isLoading={props.isLoading} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(actionLoginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);