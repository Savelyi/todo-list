import React from 'react';
import { createRoot } from 'react-dom/client';
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
const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </div>
);
