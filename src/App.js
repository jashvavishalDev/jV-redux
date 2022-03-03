import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Switch from 'react-router-dom';

import React from 'react';
import Home from './components/Home';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <React.Suspense fallback={<h1>Loading...</h1>}/>
        <Routes>
          <Route path='/' element={<LoginScreen />} exact />
          <Route path='/home' element={<Home/>} exact/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
