export const ADD_MESSAGE = 'ADD_MESSAGE';

var id = 1;

export default function(text) {
    return {
        type: ADD_MESSAGE,
        message: {
            id: ++id,
            text
        }
    }
}