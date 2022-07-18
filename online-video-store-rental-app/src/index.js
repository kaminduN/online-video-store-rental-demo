import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import {App} from './App';
import store from "./config/store";

// setup fake backend
// import { configureFakeBackend } from './services/fake-backend';
// configureFakeBackend();

const app = <Provider store={store}>
    <BrowserRouter>
            <App/>
    </BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
