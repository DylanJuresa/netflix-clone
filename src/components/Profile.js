import React from 'react'
import { auth } from '../firebase'
import "./Profile.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'


function Profile() {
    let user = useSelector(selectUser)


    return (
        <div className='profile_container'>
            <div className='profile_info'>
                <h1>Edit Profile</h1>
                <div className='profile_Row'>
                    <img className='profile_image' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
                    <form className='profile_form'>
                        <h2 >{user.email}</h2>
                        <h3>Plans (Current Plan:Test)</h3>
                        <div className='profile_plans'>
                            <p style={{ padding: "10px 0px" }}>Reneval date: 03/05/2022</p>

                            <Link to="/" onClick={(e) => {
                                auth.signOut()
                            }}>
                                <button className='signOut'>Sign Out</button>
                            </Link>


                        </div>
                    </form>


                </div>

            </div >
        </div >
    )
}

export default Profile