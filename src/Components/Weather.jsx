import React, { useEffect, useState } from "react";

export const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=damascus&appid=${import.meta.env.VITE_API_KEY}`
      );
      const data = await response.json();
      setWeatherInfo({
        temp: data["main"]["temp"],
        desc: data["weather"][0]["description"],
        img: `http://openweathermap.org/img/w/${data["weather"][0]["icon"]}.png`,
      });
    };
    fetchWeatherData();
  }, []);
  return (
    <div>
      {weatherInfo && (
        <>
          <div className="text">
            {weatherInfo.desc}, {Math.floor(weatherInfo.temp - 273.15)}
          </div>
          <div className="img">
            <img src={weatherInfo.img} />
          </div>
        </>
      )}
    </div>
  );
};