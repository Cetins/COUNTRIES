import React, {useState, useEffect} from "react";
import Headers from "../components/Headers";
import CountriesList from "../components/CountriesList";

const CountriesBox = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries()
    }, [])

const getCountries = function(){
    fetch("https://restcountries.com/v3.1/all")
    .then(result => result.json())
    .then(countries => setCountries(countries))
}



    return (
        <div>
            <h1>Container</h1>
            <Headers countries={countries}/>
            <CountriesList countries={countries}/>
        </div>
    )
}

export default CountriesBox;