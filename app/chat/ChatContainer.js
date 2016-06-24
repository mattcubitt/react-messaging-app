import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import changeMessageTextAction from './changeMessageTextAction'
import addMessageAction from './addMessageAction'
import clearMessageAction from './clearMessageAction'
import firebase from 'firebase'

class ChatContainer extends React.Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBj2wkLTr62Z_TaWk4zZ2iBM8UdwU8XGbg",
            authDomain: "react-messaging-app.firebaseapp.com",
            databaseURL: "https://react-messaging-app.firebaseio.com",
            storageBucket: "react-messaging-app.appspot.com"
        };
        var app = firebase.initializeApp(config);
        var ref = app.database().ref('messages');
        debugger;
        app.database().ref("path/to/data").set({
            foo: 1
        });

        ref.on('child_added', function(data) {
            console.log('added ' + data);
        });

        ref.on('value', function(data) {
            console.log('value ' + data);
        });
    }

    render() {
        return (
            <div>
                <MessageList {...this.props} />
                <MessageInput {...this.props} />
            </div>
        )
    }
}

// let ChatContainer = (props) => {
//     return (
//         <div>
//             <MessageList {...props} />
//             <MessageInput {...props} />
//         </div>
//     )
// };

ChatContainer.propTypes = {
    messageText: PropTypes.string.isRequired,
    onChangeMessageText: PropTypes.func.isRequired,
    onAddMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        messageText: state.messageText
    }
};

const mapDispatchToProps = function(dispatch){
    return {
        onChangeMessageText: (text) => dispatch(changeMessageTextAction(text)),
        onAddMessage: (text) => {
            dispatch(addMessageAction(text));
            dispatch(clearMessageAction(text));
        }
    }
};

ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContainer);

export default ChatContainer