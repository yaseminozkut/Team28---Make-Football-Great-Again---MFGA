import './App.css';
import React from "react";
import axios from 'axios';
import { AuthContextProvider } from './context/AuthContext';
import Routers from './Routers';

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Routers />
    </AuthContextProvider>
  );
}

export default App;
