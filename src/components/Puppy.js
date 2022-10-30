import React from 'react';
import { Link, useOutletContext, useParams } from "react-router-dom";

const PuppyComponent = () => {

    const renderedPuppies = useOutletContext();

    return (
        <div id="container">
            {
                renderedPuppies && renderedPuppies.length ? renderedPuppies.map((eachPuppy, idx) => {
                    return <div key={idx} className="puppycell">
                        <h2>Puppy name: {eachPuppy.name}</h2>
                        <img src={eachPuppy.imageUrl} height="200" width="200"/>
                        <br />
                        <Link to={`/puppies/${idx}`}>Read more about this puppy</Link>
                    </div>
                }) : <div>Loading...</div>
                
                }
        </div>
    )
};

export default PuppyComponent;