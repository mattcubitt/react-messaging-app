export const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT';

export default function changeMessageTextAction(text) {
    return {
        type: CHANGE_MESSAGE_TEXT,
        text
    }
}