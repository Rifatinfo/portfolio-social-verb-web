import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signOut} from "firebase/auth";
import auth from "../Firebase.init/Firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    

    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
        })
        
        return () =>{
            unSubscribe();
        }

    }, [user])

    const signOutUser =() =>{
        return signOut(auth);
    }
    const authInfo = {
        createUser,
        signInUser,
        onAuthStateChanged,
        user,
        signOutUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




