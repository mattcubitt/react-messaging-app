import React, { PropTypes } from 'react'

let MessageInput = (props) => {
    const {messageText, onAddMessage, onChangeMessageText} = props;

    return (
        <div>
            <input type="text" value={messageText} onChange={(event) => onChangeMessageText(event.target.value)}/>
            <button onClick={() => onAddMessage(messageText)}>></button>
        </div>
    )
};

MessageInput.propTypes = {
    messageText: PropTypes.string.isRequired
};

export default MessageInput