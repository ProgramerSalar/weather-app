import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/weather`, { cities: [city] })
      .then((response) => {
        setData(response.data.weather);
        // console.log(response.data);
        console.log("name",response.data.weather)
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="weather-Container" style={{
      display:"flex",
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
      flexWrap:"wrap",
      height:"100vh",
      width:"100vw"


    }}>
      <div style={{
        width:"20vw",
        height:"60vh",
        borderRadius:"0.5rem",
        boxShadow: "0 0.2rem 3rem rgba(0,0,0.2)",
        background:"white",
        position:"relative",
        overflow:"hidden"
      }}>
      <h1>Weather Results</h1>

      <form onSubmit={handleSubmit} style={{
       

        
      }}>
        <label>
          City:
          <input type="text" value={city} onChange={handleCityChange} style={{
             alignItems:'center',
             alignSelf:"center",
             
          }} />
        </label>
        <button type="submit">Search</button>
      </form>

      <h2>Result:</h2>
      {Object.keys(data).map((key) => (
        <h5>{key}: {data[key]}</h5>
      ))}
      </div>
      
      
    </div>
  );
};

export default Home;
