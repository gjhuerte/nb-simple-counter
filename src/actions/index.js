import {
    COUNT_INCREMENT,
    COUNT_DECREMENT,
} from './types';

export function increment() {
    return {
        type: COUNT_INCREMENT,
    };
} 

export function decrement() {
    return {
        type: COUNT_DECREMENT,
    };
}