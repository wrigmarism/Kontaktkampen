import React from 'react';
//import "../styles/Message.css";

const Message = (props) => {
    if (!props.message) {
        return null;
    }
    console.log(props.isCloseable);
    return (
        <div className="message-container">
            <div className="Message">
                {props.isCloseable && <div className="Message-close">
                    {/* <FontAwesomeIcon className="close-icon" icon={["fas", "times"]} onClick={props.closeMessage} /> */}
                </div>}
                <h5 className="Message-title">{props.message.title}</h5>
                <p className="Message-title">{props.message.text}</p>
            </div>
        </div>
    );
}

export default Message;