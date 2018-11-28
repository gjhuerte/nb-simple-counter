import { combineReducer } from 'redux';
import countReducer from './countReducer';

const reducers = combineReducer({
    count: countReducer,
});

export default reducers;