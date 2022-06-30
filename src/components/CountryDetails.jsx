import React from "react";

const CounrtyDetails = ({selectedCountry}) => {

    return (
        <div>
            <img width="100px" src={selectedCountry.flags.png}/>
            <h1>{selectedCountry.name.official}</h1>
            <p>Population: {selectedCountry.population}</p>
            <p>Country Code: {selectedCountry.fifa}</p>
        </div>
    )
}

export default CounrtyDetails;
