import React, { useEffect, useState } from 'react'
import axios from './api/axios';
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([])
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;

    }
    useEffect(() => {
        async function fetchMovie() {
            await axios.instance(axios.requests.fetchNetflix0riginals).then(
                (response) => {
                    setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
                    console.log(movie && movie)
                }
            )
        }
        fetchMovie()
    }, [])
    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <div className='banner_container'>
                <h1 className='banner_title'>{movie?.name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My list</button>
                </div>
                <p className='banner_description'>{truncate(`${movie?.overview}`, 150)}</p>
            </div>
            <div className='banner_fadebottom'></div>

        </header>
    )
}

export default Banner