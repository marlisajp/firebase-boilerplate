import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import auth from '../../firebase/firebase';

export const signUp = (email, password) => async (dispatch) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      uid: response.user.uid,
      email: response.user.email,
    };
    dispatch({ type: 'SIGN_UP', payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = {
      uid: response.user.uid,
      email: response.user.email,
    };
    dispatch({ type: 'SIGN_IN', payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await firebaseSignOut(auth);
    dispatch({ type: 'SIGN_OUT' });
  } catch (error) {
    console.error(error);
  }
};
