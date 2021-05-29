import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import {Provider} from 'react-redux'
import ErrorBoundry from './components/error-boundry'
import { ClimateServiceProvider} from './components/climate-service-context'
import ClimateService from './services/climate-service'
import store from './store'
import reportWebVitals from './reportWebVitals';


const climateService = new ClimateService()

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorBoundry>
        <ClimateServiceProvider value = {climateService}>
        <App />
        </ClimateServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
