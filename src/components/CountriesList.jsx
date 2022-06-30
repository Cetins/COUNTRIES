import React, { useState } from "react";

const CountriesList = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }

    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name.official}</option>
    })

    // const countriesItems = countries.map((country, index) => {
    //     return <CountriesItem key={index} country={country} index={index}/>
    // })

    return (
        <div>
            <h3>Countries List</h3>
            <select defaultValue="" onChange={handleChange}>
                <option value="">Choose a Country</option>
                {countryOptions}
            </select>
        </div> 
    )
}

export default CountriesList;