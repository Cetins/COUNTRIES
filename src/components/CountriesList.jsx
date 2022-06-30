import React from "react";
import CountriesItem from "./CountriesItem";

const CountriesList = ({countries}) => {

    const countriesItems = countries.map((country, index) => {
        return <CountriesItem key={index} country={country} index={index}/>
    })

    return (
        <div>
            <h3>Countries List</h3>
            <select>
                {countriesItems}
            </select>
            {/* <ul>
                {countriesItems}
            </ul> */}
        </div> 
    )
}

export default CountriesList;