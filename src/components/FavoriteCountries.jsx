import React from "react";

const FavoriteCountries = ({favoriteCountries}) => {
    const favoriteList = favoriteCountries.map((country, index) => {
        return <p value={index} key={index}>{country.name.official}</p>
    })

    return (
        <div className="container">
            <h3>Favorite Countries</h3>
            <hr></hr>
            {favoriteList}
        </div>
    )
}

export default FavoriteCountries;