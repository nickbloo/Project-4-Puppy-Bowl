import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SearchBar from './SearchBar'

const Homepage = () => {

    const [puppy, setPuppy] = useState([])

    useEffect(() => {

        async function fetchPuppyData() {

            try {
                const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players");
                const data = await response.json();

                setPuppy(data.data.players)
            } catch (error) {
                console.log(error)
            }
        }

    fetchPuppyData();

    }, [])

    return (
        <div id="homepage">
            <h1>Welcome to Puppy Bowl!</h1>
            <img src="https://pic.chinesefontdesign.com/uploads/2017/05/05-1.gif" height="100" width="100" alt="puppy-img" />
            <Navbar />
            <SearchBar />
            <Outlet context={puppy} />
        </div>
    )
};


export default Homepage;