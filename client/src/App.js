import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Main from "./views/Main";
import "./App.css";
import Detail from "./components/Detail";
import Update from "./components/Update";
import PetList from "./components/PetList";
import PetForm from "./components/PetForm";
// import PetForm from "./components/PetForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" />
          <Route element={<Detail />} path="/pets/:id" />
          <Route element={<Update />} path="/pets/edit/:id" />
          <Route element={<PetForm />} path="/pets/new/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
