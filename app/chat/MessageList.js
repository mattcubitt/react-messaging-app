import React, { PropTypes } from 'react'

let MessageList = (props) => {
    const {messages} = props;

    return (
        <ul>
            {
                messages.map(message => <li key={message.id}>{message.text}</li>)
            }
        </ul>
    )
};

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
};

export default MessageList