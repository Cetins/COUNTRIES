import React from "react";

const Headers = ({countries}) => {

    const populationArray = countries.map((country) => {
       return country.population;
    })

    const initialTotal = 0;

    const totalPopulation = populationArray.reduce(
        (prev, current) => prev + current, 
        initialTotal
        );

    return (
        <div className="container">
            <h2>Total Population</h2>
            <hr></hr>
            {totalPopulation ? <p>{Intl.NumberFormat('de-DE').format(totalPopulation)}</p> : <p>Loading...</p>}
        </div>
    )
}

export default Headers;
