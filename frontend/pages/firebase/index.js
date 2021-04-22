import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import config from './config';

try{
    firebase.initializeApp(config);
}
catch(e){
    console.log(e);
}

export default firebase;

