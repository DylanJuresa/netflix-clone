import React from "react";
import "./App.css";
import HomeScreen from "../src/components/HomeScreen.js"

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
function App() {
  const user = null
  return (
    <div className="app">
      <Router>
        <Routes>
          {!user ?
            <Route path='/login' element={<Login />} />
            :
            <Route path='/' element={<HomeScreen />} />}
        </Routes>

      </Router>
    </div>
  )
}
export default App;