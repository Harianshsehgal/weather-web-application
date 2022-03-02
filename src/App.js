import react, { useState } from "react";
import { SearchBar } from "./components/searchBar";
import WeatherCard from "./components/weatherCard";

function App() {
  const [selectedCity, setSelectedCity] = useState("moscow");
  const [cityWeather, setCityWeather] = useState({
    location: "",
    localTime:'',
    temp: 1,
    feelsLike: 2,
    humidity: 0,
    windSpeed: 0,
    weatherDespcription: "",
    weatherIcon: "",
  });

  const currentDataFetch = async (city) => {
    const data = await fetch(
      `http://api.weatherstack.com/current?access_key=6f607064e89ae54c3a31a50296c0d2fe&query=${city}`
    )
    const resp = await data.json();
    console.log(resp);
    const respWeather = resp.current;
    console.log(respWeather);
if(respWeather==undefined)alert('Please ener a valid City name')
    // setCityWeather([resp.current.temperature,resp.current.weather_descriptions[0]])
    setCityWeather({
      location: resp.location.name,
      localTime:resp.location.localtime,
      temp: respWeather.temperature,
      feelsLike: respWeather.feelslike,
      humidity: respWeather.humidity,
      windSpeed: respWeather.wind_speed,
      weatherDespcription: respWeather.weather_descriptions[0],
      weatherIcon: respWeather.weather_icons[0],
    });
  };

  

  //we get city name from input component and is passed to updateCity function as "data"
  function updateCity(data) {
    setSelectedCity(data);
    currentDataFetch(selectedCity);
    //fetches weather data from Api for specific city
    console.log(selectedCity);
    console.log(cityWeather);
  }




  return (
    <div className="App">
      <header className="App-header">
        <h3>The Weather App</h3>
      </header>
      <SearchBar updateCity={updateCity} cityName={selectedCity} setCityName={setSelectedCity}/>
      <WeatherCard weatherData={cityWeather} />
      {/* Weather card displays data in city weather object */}
    </div>
  );
}

export default App;
