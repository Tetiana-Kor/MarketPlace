import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
