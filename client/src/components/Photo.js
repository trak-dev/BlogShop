import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const Photos = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
          axios
            .get(
              "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
            )
            .then((res) => setData(res.data));},[]);
            //[] c'est le call back on peut mettre data 
            return (
                <div className="photo">
                <ul className="photo-list">
                    {data.map((country) => (
                        <Card country = {country} key={country.name}></Card>
                    ))}
                </ul>
            </div>
            );
};
export default Photos ; 

