
import React from 'react';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Register from './screens/Register';



function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <React.Suspense fallback={<h1>Loading...</h1>}/>
        <Routes>
      
          <Route path='/' element={<LoginScreen />} exact />
          <Route path='/home' element={<Home/>} />
          <Route path='/register' element={<Register/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
