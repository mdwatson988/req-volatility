import React, { createContext, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate, useParams} from 'react-router-dom';
import Login from './pages/login.jsx';
import Features from './pages/features.jsx';

const UserEmailContext = createContext();

const App = () => {
  const [userEmail, setUserEmail] = useState(undefined);

  return(
    <UserEmailContext.Provider value={ {userEmail, setUserEmail} }>
      {/* <Features></Features> */}
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/features' element={<Features />}></Route>
            <Route path='/features/:email' element={<Features />}></Route>
            <Route path='/*' element={<Navigate to='/' replace />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserEmailContext.Provider>
  );
};

export default App;
export { UserEmailContext };