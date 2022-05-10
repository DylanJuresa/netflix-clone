import React, { useState } from 'react'
import "./Login.css"
import SignUp from './SignUp'

function Login() {
    const [isLogin, setLogin] = useState(false)
    return (
        <div className='login'>
            <div className='login_nav'>
                <img onClick={()=>setLogin(false)} className='login_logo' src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png' />
                <button className='login_button'>Sign In</button>
         
            </div>
            <div className='login_body'>
                {isLogin ? <SignUp /> :
                    <>
                        <h1>Unlimited films, TV programmes and
                            more.</h1>
                        <h2>Watch anywhere.Cancel at any time</h2>
                        <h3>
                            Ready to watch? Enter your email to
                            create or restart your
                            membership.</h3>
                        <div className='login_input'>

                            <input type="email" placeholder="Email Adress"></input>
                            <button className='login_buttonInput' onClick={() => { setLogin(true) }}>Get Started</button>

                        </div>
                    </>
                }


            </div>
        </div>

    )
}

export default Login