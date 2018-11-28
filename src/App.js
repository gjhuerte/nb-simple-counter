import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reducers from './reducers';
import Counter from './components/counter';

export default class App extends Component {
    render() {
        const store = createStore(reducers);

        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
}