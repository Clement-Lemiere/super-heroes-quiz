import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../SignUp';
import ErrorPage from '../ErrorPage';
import LogOut from '../LogOut';
import Quiz from '../Quiz';

function App() {
  return (
    <Router>
      <Header />

      <Routes>

      <Route exact path='/' element={<Landing />} />
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/logOut' element={<LogOut />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='*' element={<ErrorPage />} />

      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
