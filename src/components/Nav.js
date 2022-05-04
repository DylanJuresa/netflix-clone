import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const [show, setShow] = useState(false)
    let navigate = useNavigate();

    function transitionNavBar() {

        if (window.scrollY > 100) {
            setShow(true)

        }
        else {
            setShow(false)
        }

    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => {
            window.removeEventListener("scroll", transitionNavBar)
        }

    }, [])
    return (
        <div className={`nav ${show && "nav_backgroundColor"}`}>
            <div className='nav_container'>
                <Link style={{ alignSelf: "center" }} to="/"><img  className='nav_logo' src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png'></img></Link>
                <Link style={{ alignSelf: "center" }} to="/profile"><img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img></Link>
            </div>
        </div>
    )
}

export default Nav