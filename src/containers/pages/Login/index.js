import React from 'react';
import { connect } from 'react-redux';
import { actionChangeUser } from '../../../config/redux/action'
import './Login.scss';

const Login = (props) => {
    return (
        <div>
            <p>login sebagai {props.user}</p>
            <button onClick={props.changeUser}>Ganti User</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    changeUser: () => dispatch(actionChangeUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);