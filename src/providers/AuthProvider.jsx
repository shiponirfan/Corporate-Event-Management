import PropTypes from 'prop-types';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { createContext, useState } from 'react';
export const AuthContext = createContext(null);
const auth  = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new  GoogleAuthProvider()

    // SignIn With Email & Password
    const signIn = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login With Email & Password
    const  logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login With Google
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo = {
        user,
        signIn,
        logIn,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;