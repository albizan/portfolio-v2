import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Translations
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    {/*
     * Every component in this tree has acces to the same i18n instance thanks to react context api
     * If I want to change i18n config I have to use const '{ i18n } = useTranslation()' hook
     */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
