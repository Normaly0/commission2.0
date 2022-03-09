import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import Container from './container/container';
import './index.scss';
import reducers from './reducers/reducers';

let store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return(
    <div>
      <Container />
    </div>
  )
}

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);