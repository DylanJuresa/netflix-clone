import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, setShow] = useState(false)

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
                <img className='nav_logo' src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png'></img>
                <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
            </div>
        </div>
    )
}

export default Nav