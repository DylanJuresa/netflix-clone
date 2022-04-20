import React from 'react'
import axios from './api/axios'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'
import Row from './Row'


function HomeScreen() {
    return (
        <div className='Homescreen'>
            <Nav />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={axios.requests.fetchNetflix0riginals} />
            <Row title="Trending" fetchUrl={axios.requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={axios.requests.fetchTopRated} />
            <Row title="Romances" fetchUrl={axios.requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={axios.requests.fetchDocumentaries} />
            <Row title="Action" fetchUrl={axios.requests.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={axios.requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={axios.requests.fetchHorrorMovies} />

        </div>
    )
}

export default HomeScreen