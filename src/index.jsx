import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from '@reducers/index';
import App from '@components/App/App';
import GlobalStyles from './styles/global';

import './i18n';

const store = createStore(todoApp);

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <GlobalStyles />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <App />
      {/* </Suspense> */}
    </Provider>
  </div>
);
