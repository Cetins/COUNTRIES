import React, {useState, useEffect} from "react";
import Headers from "../components/Headers";
import CountriesList from "../components/CountriesList";
import CounrtyDetails from "../components/CountryDetails";
import FavoriteCountries from "../components/FavoriteCountries";
import AddFavoriteButton from "../components/AddFavoriteButton";
// import './CountriesBox.css';

const CountriesBox = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favoriteCountries, setFavoriteCountries] = useState([]);

    useEffect(() => {
        getCountries()
    }, [])

    const addFavoriteCountry = function(country) {
        let copyFavorite = [...favoriteCountries];
        copyFavorite.push(country);
        setFavoriteCountries(copyFavorite);
    }

    const getCountries = function(){
        fetch("https://restcountries.com/v3.1/all")
        .then(result => result.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function(country) {
        setSelectedCountry(country);
    }

    return (
        <div>
            <h1>Container</h1>
            <Headers countries={countries}/>
            <CountriesList countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CounrtyDetails selectedCountry={selectedCountry}/> : null}
            {selectedCountry ? <AddFavoriteButton selectedCountry={selectedCountry}/> : null}
            {favoriteCountries ? <FavoriteCountries favoriteCountries={favoriteCountries}/> : null}
        </div>
    )
}

export default CountriesBox;