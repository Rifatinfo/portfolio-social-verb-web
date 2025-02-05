import { createContext } from "react";

const AuthProvider = ({children}) => {
   
    const AuthContext = createContext(null);
    const authInfo = {
        name : 'Rifat'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




