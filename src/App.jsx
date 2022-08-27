import Chat from '../components/Chat'
import SignIn from '../components/SignIn'
import LogOut from '../components/LogOut';
import './App.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function App() {
  const [user] = useAuthState(auth);
  console.log(user);


  return (
    <div className="App">
      <SignIn/>
      <LogOut/>
      <Chat/>
    </div>
  )
}

export default App
