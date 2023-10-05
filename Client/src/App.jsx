import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import {AuthProvider} from './context/AuthContext'

import RegisterPage from './views/registerPage.jsx'
import LoginPage from './views/loginPage.jsx'



function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/notes" element={<h1>Note page</h1>}></Route>
          <Route path="/add-notes" element={<h1>New Notes</h1>}></Route>
          <Route path="/notes/:id" element={<h1>Update Notes</h1>}></Route>
          <Route path="/profile" element={<h1>Profile</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App