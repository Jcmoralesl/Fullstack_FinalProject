import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./views/registerPage.jsx";
import LoginPage from "./views/loginPage.jsx";
import NotePage from "./views/notePage";
import HomePage from "./views/homePage";
import NoteFormPage from "./views/noteFormPage";
import ProfilePage from "./views/profilePage";

import ProtectedRoute from "./ProtectedRoute";
import { NoteProvider } from "./context/NotesContext";
import NavBar from "./components/navbar";

function App() {
  return (
    <AuthProvider>
      <NoteProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>

              <Route element={<ProtectedRoute />}>
                <Route path="/notes" element={<NotePage />}></Route>
                <Route path="/add-notes" element={<NoteFormPage />}></Route>
                <Route path="/notes/:id" element={<NoteFormPage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </NoteProvider>
    </AuthProvider>
  );
}

export default App;
