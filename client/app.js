import React, { createContext, useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './pages/login.jsx';

const UserContext = createContext();

const App = () => {
  // const [user, setUser] = useState(undefined);
  // const userObj = {
  //   user: user,
  //   setUser: setUser
  // }

  return (
    <h1>Tim</h1>
  //   // <Login/>
  //   <UserContext.Provider value={userObj}>
  //     <BrowserRouter>
  //     <Login />
  //       <Routes>
  //         <Route path='/' element={<Login />} />
  //         <Route path='/Login' element={<Login />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </UserContext.Provider>
  );
};

export default App;
export { UserContext };