
import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import {db} from '../firebase';
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';
import SendMessage from "./SendMessage";

const Chat = () => {
    const [message, setMessage] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach(doc => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessage(messages);
            console.log(messages);
        })
        return () => unsubscribe();
    }, [])

    return ( 
        <>
            <section>
                <h2>From Chat</h2>
                {
                    message && message.map(item => (
                        <Message
                            key={item.id}
                            message={item}
                        />
                    ))
                }
            </section>
            <span ref={scroll}></span>
            <SendMessage/>
        </>
     );
}
 
export default Chat;