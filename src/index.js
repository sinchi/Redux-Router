import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import PostsIndex  from './components/posts_index';

import { BrowserRouter, Route } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
          <Route path="/posts" component={PostsIndex} />          
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
