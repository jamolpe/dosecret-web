import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material';
import styles from './style.module.scss';

const theme = createTheme({
  typography: {
    fontFamily: styles.appFont
  },
  palette: {
    background: { paper: '#fafafb', default: '#fafafb' }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Provider store={store}>
            <App />
          </Provider>
        </LocalizationProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
