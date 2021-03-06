import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBZ4Ult26vA0cjDM_JJiAMos_Y_C4haTOY',
  authDomain: 'home-in-stlye.firebaseapp.com',
  projectId: 'home-in-stlye',
  storageBucket: 'home-in-stlye.appspot.com',
  messagingSenderId: '925523584637',
  appId: '1:925523584637:web:7a9ba3e326a57beac9f314',
  measurementId: 'G-WM9N5SJXN2',
};

// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRaf = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRaf.doc();
    batch.set(newDocRef, object);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
