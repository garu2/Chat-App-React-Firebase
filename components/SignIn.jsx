//import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const SignIn = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }


  return (
    <>
      <h2>From SignIn</h2>
      <button onClick={googleSignIn}>Sign In</button>
    </>
  );
}
 
export default SignIn;