import auth_firebase from '../../../config/auth';


export const actionChangeUser = () => {
    return (dispatch) => {
        setTimeout(() => {
            return dispatch({ type: 'CHANGE_USER', value: 'Fachri Amin' })
        }, 2000)
    }
}

export const actionRegisterUser = (data) => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_ISLOADING', value: true });
        return auth_firebase(data.email, data.password, dispatch);
    }
}