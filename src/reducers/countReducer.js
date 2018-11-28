import {
    COUNT_INCREMENT,
    COUNT_DECREMENT,
} from '../actions/types.js';

let count = 0;

export default function (state = 0, action) {
    switch(action.type) {
        case COUNT_INCREMENT:
            count++;
            break;
        case COUNT_DECREMENT:
            count--;
            break;
        default:
            count = 0;
            break;
    }

    return count;
}