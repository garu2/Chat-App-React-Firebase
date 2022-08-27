import { auth } from '../firebase';

const LogOut = () => {
    const signOut = () => {
        signOut(auth);
    }
    
    return ( 
        <>
            <button onClick={() => auth.signOut()}>LogOut</button>
        </>
    );
}
    
export default LogOut;
