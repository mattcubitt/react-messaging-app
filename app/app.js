import './app.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import ChatContainer from './chat/ChatContainer'
import messagesReducer from './chat/messagesReducer'
import messageTextReducer from './chat/messageTextReducer'

var reducers = {
    messages: messagesReducer,
    messageText: messageTextReducer
};

var rootReducer = combineReducers(reducers);

const loggerMiddleware = createLogger();

var configureStore = function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};

render(
    <Provider store={configureStore()}>
        <ChatContainer/>
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}