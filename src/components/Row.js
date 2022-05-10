import React, { useState, useEffect, useRef } from 'react'
import axios from './api/axios'
import "./Row.css"
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";


function Row({ title, fetchUrl }) {

    const [shake, setShake] = useState(false);

    const animate = () => {

        if (scrollX === refWidth) {
            // Button begins to shake
            setShake(true);

            // Buttons stops to shake after 2 seconds
            setTimeout(() => setShake(false), 2000);

        }


    }

    const [movies, setMovies] = useState([])
    const ref = useRef(null);
    const [refWidth, setRefWidth] = useState(0)
    const [scrollX, setScrollX] = useState(0);
    const scroll = (scrollOffset, direction) => {
        if (refWidth === 0) {
            setRefWidth(ref.current.scrollWidth - ref.current.clientWidth)
        }
        if (direction === "right") {
            console.log(ref.current.scrollWidth)
            ref.current.scrollLeft += scrollOffset;
            if (scrollX + scrollOffset > refWidth) {
                setScrollX(refWidth)
            }
            else {
                setScrollX(scrollX + scrollOffset)
            }
        }
        else {
            ref.current.scrollLeft -= scrollOffset;
            if (scrollX - scrollOffset < 0) {
                setScrollX(0)
            }
            else {
                setScrollX(scrollX - scrollOffset)
            }

        }

    };
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
            <h2>{title}</h2>
            {scrollX > 0 ? <BiLeftArrowAlt className='row_slider_left' size={40} color="white" onClick={() => {
                scroll(1200, "left")
               
            }
            } /> : null}
            <BiRightArrowAlt className='row_slider_right' size={40} color="white" onClick={() => {scroll(1200, "right")
             animate()}
        } />
            <div className={`row_images ${shake && "shake"}`} ref={ref}>

                {movies.map(el =>
                    <img key={el.id} className='row_image' src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`} />)
                }

            </div>
        </div>

    )
}

export default Row