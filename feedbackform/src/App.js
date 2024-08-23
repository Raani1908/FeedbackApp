import './App.css';
import {Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import axios from 'axios';
import React from 'react';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import FeedbackForm from './components/FeedbackForm.js';

// import {Toaster} from 'react-hot-toast';

// axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.withCredentials = true


function App() {
  return (
    <>
    <Routes>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/signin' element={<SignIn/>}/>
     <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
    
  </>
  );
}

export default App;
