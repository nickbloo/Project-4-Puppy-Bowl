import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const PuppyDetails = () => {
    const renderedPuppies = useOutletContext();
    const { id } = useParams();

    const currentPuppy = renderedPuppies[id];

    return (
        <div>
            {
                currentPuppy.name && currentPuppy.name.length ?
                    <div className="puppycell">
                        <h2>{currentPuppy.name}</h2>
                        <img src={currentPuppy.imageUrl} height="400" width="400"/>
                        <h4>Breed: {currentPuppy.breed}</h4>
                        <p><b>Status: </b>{currentPuppy.status}</p>
                        <p><b>Team: </b>{currentPuppy.teamId}</p>
                        <p><b>Cohort: </b>{currentPuppy.cohortId}</p>
                        <Link to="/puppies">View More Puppies</Link>
                    </div> : <div>Loading...</div>
            }
        </div>
    )
};

export default PuppyDetails;