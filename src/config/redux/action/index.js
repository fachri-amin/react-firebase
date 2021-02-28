import { registerFirebase, loginFirebase } from '../../../config/auth';


export const actionLoginUser = (data) => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_ISLOADING', value: true });
        return loginFirebase(data.email, data.password, dispatch);
    }
}

export const actionRegisterUser = (data) => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_ISLOADING', value: true });
        return registerFirebase(data.email, data.password, dispatch);
    }
}