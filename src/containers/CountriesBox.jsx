import React, {useState, useEffect} from "react";
import Headers from "../components/Headers";
import CountriesList from "../components/CountriesList";
import CounrtyDetails from "../components/CountryDetails";
import FavoriteCountries from "../components/FavoriteCountries";
import Heart from "../components/HeartIcon";
import './CountriesBox.css';

const CountriesBox = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favoriteCountries, setFavoriteCountries] = useState([]);

    useEffect(() => {
        getCountries()
    }, [])

    const handleClick = (event) => {
        event.preventDefault();
        FavoriteCountries.state = true;
        addFavoriteCountry(selectedCountry);
        console.log("click handled")
    }

    const addFavoriteCountry = function(country) {

        let copyFavorite = [...favoriteCountries];
        if(copyFavorite.includes(country)) {
            return;
        }
        copyFavorite.push(country);
        setFavoriteCountries(copyFavorite);
        console.log("fav added")
        console.log(favoriteCountries);
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
            <h1 className="container">Countries API</h1>
            <Headers countries={countries}/>
            <CountriesList countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CounrtyDetails selectedCountry={selectedCountry}/> : null}
            {selectedCountry ? <button type="submit" onClick={handleClick}>
                Add Country to Favorites <Heart className="icon"/>
                </button> : null}
            <FavoriteCountries favoriteCountries={favoriteCountries}/>
        </div>
    )
}

export default CountriesBox;