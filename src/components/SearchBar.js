import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const SearchBar = () => {
    const renderedPuppies = useOutletContext();
    const [searchInput, setSearchInput] = useState("");

    function searchPuppies(event) {
        event.preventDefault();

            renderedPuppies && renderedPuppies.length ? renderedPuppies.map((puppy) => {
                puppy.filter(filteredPuppy => {
                    return filteredPuppy.name.includes(searchInput)
                })
            }) : null
    };

    function updateSearchInput(event) {
        setSearchInput(event.target.value)
    };

    return (
        <div id="searchbar">
            <form onSubmit={searchPuppies}>
                <input type="text" value={searchInput} onChange={updateSearchInput} placeholder="Search for a puppy"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;