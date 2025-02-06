import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase.init/Firebase.init";

export  const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
   
    const [user, setUser] = useState(null);  
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email,  password)
    }

     onAuthStateChanged( auth, currentUser => {
        if(currentUser){
           console.log('current logged user', currentUser);
           setUser(currentUser);
        }
        else{
            console.log("No User Logged In")
            setUser(null);
        }
    })
    const authInfo = {
        createUser,
        signInUser,
        onAuthStateChanged,
        user
       }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




