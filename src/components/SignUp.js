import React from 'react'
import { useRef } from 'react';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./SignUp.css"

function SignUp() {
    const email = useRef(null)
    const password = useRef(null)

    const register =
        (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value
            ).then((user) => console.log(user)).catch(error => alert(error))
        };
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value,
            password.current.value).then((response) => { console.log(response) }).catch(error => alert(error))

    };
    return (
        <div className="signUp">
            <form className='signUp_form'>
                <h1>Sign In</h1>
                <input ref={email} placeholder="Email" type="email" />
                <input ref={password} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span style={{ color: "gray" }}>New to Netflix? </span>
                    <span onClick={register} className='signUp_spanLink'>Sign up Now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp