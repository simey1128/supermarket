import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from 'mobx-react'
import RootStore from './stores/index'

const rootStore = new RootStore();
ReactDOM.render(
  <Provider {...rootStore}>
    <App />
  </Provider>
    
,
  document.getElementById('root')
);
