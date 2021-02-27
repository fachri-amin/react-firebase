import firebase from '../firebase';

const auth_firebase = (email, password, dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('berhasil :', user);
            dispatch({ type: 'CHANGE_ISLOADING', value: false });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch({ type: 'CHANGE_ISLOADING', value: false });
        });
}

export default auth_firebase;