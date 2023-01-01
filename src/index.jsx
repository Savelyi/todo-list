import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createGlobalStyle } from 'styled-components';
import todoApp from './reducers/index';
import App from './components/App/App';

const store = createStore(todoApp);

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  font-size: 1.6rem;
  font-family: 'Segoe UI';
}
`;
render(
  <div>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </div>,

  document.getElementById('root')
);
