import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();

const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const [loading,setLoading]=useState(true)


    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };

    const signWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const forgotPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const updateUserProfile=(updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }

    const authInfo = {
        user,
        setUser,
        registerUser,
        signUser,
        logOut,
        signWithGoogle,
        forgotPassword,
        updateUserProfile,
        loading
    };
    useEffect(()=>{
        const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser)
              setLoading(false)
           
          })
          return ()=>{
              unSubscribe()
          }
  
      },[])

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
