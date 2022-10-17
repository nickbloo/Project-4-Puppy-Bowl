import React, { useEffect, useState } from 'react';

const PuppyComponent = () => {

    const [puppy, setPuppy] = useState([])

    useEffect(() => {

        async function fetchPuppyData() {

            try {
                const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players");
                const data = await response.json();
                console.log("I am the data: ", data.data.players)

                setPuppy(data.data.players)
            } catch (error) {
                console.log(error)
            }
        }

    fetchPuppyData();

    }, [])


    return (
        <div id="container">
            {
                puppy && puppy.length ? puppy.map((eachPuppy, idx) => {
                    console.log(eachPuppy)
                    return <div key={idx} className="puppycell">
                        <h2>Puppy name: {eachPuppy.name}</h2>
                        <img src={eachPuppy.imageUrl} height="200" width="200"/>
                    </div>
                }) : <div>Loading...</div>
                
                }
        </div>
    )
};

export default PuppyComponent;