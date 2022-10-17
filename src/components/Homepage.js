import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
    return (
        <div id="homepage">
            <h1>Welcome to Puppy Bowl!</h1>
            <img src="https://pic.chinesefontdesign.com/uploads/2017/05/05-1.gif" height="100" width="100" alt="puppy-img" />
            <Navbar />
            <Outlet />
        </div>
    )
};


export default Homepage;