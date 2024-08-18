import React, { useEffect, useState } from "react";
import "./css/weather.css";
const Weather = () => {
  //906c242454b7c0a172ce3a198554d695
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(" ");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=906c242454b7c0a172ce3a198554d695`;
      const response = await fetch(url);
      const resJSON = await response.json();
      setCity(resJSON.main);
    };

    fetchApi();
  }, [search]);
  // if(search.length){
  //  return <img src="https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif" alt="loader" />
  // }else
  return (
    <div className="container-sm">
      <div className="mx-auto p-2 bg-body-tertiary weather-box">
        <h1 className="fw-bold fs-1">Weather App</h1>
        <div className="m-3">
          <input
            type="search"
            className="form-control-lg form-control"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="fs-4 text-center fw-lighter text-danger">No Data Found</p>
        ) : (
          
           
              <div className="info">
                <h2 className="fw-bold fs-1 text-center">{search}</h2>
                <h1 className="fw-semibold fs-2">
                  Temperature: {city.temp} &deg;C
                </h1>

                <div className="fw-semibold fs-5 text-center">
                  Min-Temp:&nbsp;&nbsp;&nbsp; {city.temp_min} &deg;C
                </div>
                <div className="fw-semibold fs-5 text-center">
                  Max-Temp:&nbsp;&nbsp;&nbsp; {city.temp_max} &deg;C
                </div>
                <div className="fw-semibold fs-5 text-center">
                  Humidity:&nbsp;&nbsp;&nbsp; {city.humidity}%{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cloud-haze2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 3a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3M0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                  </svg>
                </div>
              </div>
            )}
          
        
      </div>
    </div>
  );
};

export default Weather;
