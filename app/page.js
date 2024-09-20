"use client";
import React, { useState } from "react";

const api = {
  key: "c949dc37ae90bfe233caaa5f5bc302bf",
  base: "https://api.openweathermap.org/data/2.5/",
};

const page = () => {
  const [search, setsearch] = useState("");
  const [weather, setweather] = useState({});
  const [error, seterror] = useState(false);
  const searchcity = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("city not found");
        }
        return res.json();
      })
      .then((result) => {
        setweather(result);
        seterror(false);
      })
      .catch(() => {
        setweather({});
        seterror(true);
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl mb-4">
        <b>Weather</b>
      </h1>
      <form className="flex justify-center items-center mb-10 ">
        <input
          type="search"
          placeholder="enter city name"
          className="p-2 border-black mr-3"
          onChange={(e) => setsearch(e.target.value)}
        />
        <button
          onClick={searchcity}
          className="bg-blue-500 p-2 text-white font-bold border-none rounded"
        >
          Search
        </button>
      </form>
      <div className=" flex justify-center items-start ">
      {error ? (
        <h2 className="bg-blue-400 p-3 text-white w-60 text-center rounded">city not found</h2>
      ) : (
        weather.name && (
          <div className="bg-blue-400 p-3 text-white w-60 text-center rounded" >
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main?.temp} °C</p>
            <p>Weather: {weather.weather?.[0]?.description}</p>
          </div>
        )
      )}
      </div>
    </div>
  );
};

export default page;
