import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import {store} from './store';
import { fillOffersList } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fillOffersList(offers));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offers}
      />
    </Provider>
  </React.StrictMode>
);
