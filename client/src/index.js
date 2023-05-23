import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from"../src/redux/store/store";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Provider store={store}>
    <App />
    </Provider>
  </Fragment>



);

