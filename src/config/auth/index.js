import firebase from '../firebase';

const auth_firebase = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('berhasil :', user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

export default auth_firebase;