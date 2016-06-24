import { CHANGE_MESSAGE_TEXT } from './changeMessageTextAction';
import { CLEAR_MESSAGE_TEXT } from './clearMessageAction';

export default (state = '', action) => {
    switch(action.type) {
        case CHANGE_MESSAGE_TEXT:
            return action.text;
        case CLEAR_MESSAGE_TEXT:
            return '';
        default:
            return state;
    }
}