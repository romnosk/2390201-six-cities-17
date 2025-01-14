import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { Setting } from './components/const/const';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      // rentOffersNumber = {Setting.RENT_OFFERS_NUMBER}
      offers = {offers}
    />
  </React.StrictMode>
);
