import React from 'react'
import './Navigation.css';
import requests from './requests';



function Navigation({ setSelectedCategory }) {
    return (
        <div className='Navigation'>
            <h2 onClick={() => setSelectedCategory(requests.getHot)}>Hot</h2>
            <h2 onClick={() => setSelectedCategory(requests.getTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedCategory(requests.getActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedCategory(requests.getComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedCategory(requests.getRomanticMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedCategory(requests.getMysteryMovies)}>Mystery</h2>

        </div>
    )
}

export default Navigation
