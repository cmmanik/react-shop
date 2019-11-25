import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIHubdviLArgUGgcJ5M6DB4TA-KSzfySE",
    authDomain: "react-shop-5ee9f.firebaseapp.com",
    databaseURL: "https://react-shop-5ee9f.firebaseio.com",
    projectId: "react-shop-5ee9f",
    storageBucket: "react-shop-5ee9f.appspot.com",
    messagingSenderId: "393213052871",
    appId: "1:393213052871:web:882c5c82613955d2fbfbe2",
    measurementId: "G-XFZLRDPBET"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInwithGoogle = () => auth.signInWithPopup(provider);

// create user profile
export const createUserProfile = async (userAuth, aditioanalData) => {
    if(!userAuth) return;
    console.log(userAuth)
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapSot = await userRef.get();
    console.log(snapSot)
    if(!snapSot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                createdAt,
                email,
                ...aditioanalData
            })
        } catch (error) {
            console.log('error createing user', error.message)
        }
    }
    return userRef;
}


export const convertCollectionsToMap = (collections) => {
    
   const transFormedCollections = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    });

    return transFormedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})

}

export default firebase;