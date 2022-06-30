import React from "react";

const CountriesItem = ({country, index}) => {

    return <option>{country.name.official}</option>

    // return <li key={index}>{country.name.official}</li>
}

export default CountriesItem;