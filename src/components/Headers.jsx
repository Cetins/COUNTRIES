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
        console.log(totalPopulation)

    return (
        <div>
            <h2>Total Population</h2>
            <p>{totalPopulation}</p>
        </div>
    )
}

export default Headers;
