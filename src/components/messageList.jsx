import React from 'react';
import Message from "./message";

const MessageList = (props) => {
    if (!props.error)
    {
        return null;
    }
    const message = props.message.map(news => <Message isCloseable={false} message={message} /> );
    return(
        <div>
            {message}
        </div>
    );
}

export default MessageList;