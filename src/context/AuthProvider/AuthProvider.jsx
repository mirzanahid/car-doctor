import { createContext } from "react"
import app from "../../firebase/firebase.init"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const authContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
   

const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
const signOutUser = ()=>{
    return signOut(auth)
}





    const authInfo = {
        createUser,
        loginUser,
        signOutUser
    }
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider