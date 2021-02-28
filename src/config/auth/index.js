import firebase from '../firebase';

export const registerFirebase = (email, password, dispatch) => {

    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // console.log('berhasil :', user);
                dispatch({ type: 'CHANGE_ISLOADING', value: false });
                resolve(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                dispatch({ type: 'CHANGE_ISLOADING', value: false });
                reject(false);
            });
    })
}

export const loginFirebase = (email, password, dispatch) => {

    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // console.log('berhasil :', user);
                const dataUser = {
                    email: user.user.email,
                    uid: user.user.uid
                }
                dispatch({ type: 'CHANGE_ISLOADING', value: false });
                dispatch({ type: 'CHANGE_ISLOGIN', value: true });
                dispatch({ type: 'CHANGE_USER', value: dataUser });
                resolve(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                dispatch({ type: 'CHANGE_ISLOADING', value: false });
                reject(false);
            });
    })
}