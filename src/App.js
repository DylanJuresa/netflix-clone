import React from "react";
import { useEffect } from "react";
import "./App.css";
import HomeScreen from "../src/components/HomeScreen.js"
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    console.log(user)

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))

      } else {
        // Logged out
        dispatch(logout())
      }
    });
    return unsubscribe
  }, [dispatch]);


  return (
    <div className="app">
      <Router>
        {!user ?
          <Routes>
            <Route path='/' element={<Login />}/>
          </Routes>
          :
          <Routes>
            <Route path='/' element={<><Nav /><HomeScreen /></>}/>
            <Route path="/profile" element={<><Nav /><Profile /></>}/>
          </Routes>
        }
      </Router>

    </div>
  )
}
export default App;