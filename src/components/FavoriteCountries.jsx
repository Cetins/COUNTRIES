import React from "react";

const FavoriteCountries = ({favoriteCountries}) => {

    return (
        <div className="container">
            <h3>Favorite Countries</h3>
            <hr></hr>
            <ul>
                {favoriteCountries.map(function (country, index) {
                    return <li key={index}>{country.name.official}</li>
                })}
            </ul>
        </div>
    )
}

export default FavoriteCountries;