import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Root from './routes/root';
import configureStore from './redux/store/store';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Root />
        </Provider>
    </React.StrictMode>
);

/*
const root = document.getElementById('root');
root.innerHTML = "<Root />"
*/
