const Message = ({ message }) => {
    //console.log('message: ',message);
    return ( 
        <div>
            <p>{message.name}</p>
            <p>{ message.text }</p>
        </div>
     );
}
 
export default Message;