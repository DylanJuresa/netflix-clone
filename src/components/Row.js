import React, { useState, useEffect } from 'react'
import axios from './api/axios'
import "./Row.css"


function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchMovies() {
            await axios.instance(fetchUrl).then(
                (response) => {
                    setMovies(response.data.results)
                    console.log(response.data)
                }
            )
        }
        fetchMovies()
    }, [])
    return (
        <div className='row'>
            <h2 style={{ color: "white" }}>{title}</h2>
            <div className='row_images'>
                {movies.map(el =>
                    <img key={el.id} className='row_image' src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`} />)}
            </div>
        </div>

    )
}

export default Row