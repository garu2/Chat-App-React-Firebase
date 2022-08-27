import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import {auth, db} from '../firebase';
//import {addDoc, collection, serverTimestamp} from 'firebase/firestore';

const SendMessage = () => {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        if(input === ''){
            alert('Please enter a valid message');
            return;
        }
        const {uid, displayName} = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        }) 
        setInput('');
    }
    return ( 
        <form onSubmit={sendMessage}>
            <input type="text" placeholder="message" value={input} onChange={e=>setInput(e.target.value)}/>
            <input type="submit" value="Send"/>
        </form>
    );
}
 
export default SendMessage;