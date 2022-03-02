import react from "react";

function WeatherCard(props) {
  return (
    <div className="weatherCard">
      <h3>Location: {props.weatherData.location}</h3>
      <p>{props.weatherData.localTime}</p>
      <div className="weatherParameters">
        <div className="weatherdataTemp">
          <div className="weatherIconDiv">
            <img
            className="weatherIcon"
              src={props.weatherData.weatherIcon}
              alt=""
            />
            <h2>{props.weatherData.weatherDespcription}</h2>
          </div>
          <div className="weatherTemp">
            <h2> {props.weatherData.temp} °C</h2>
            <p> Feels Like:{props.weatherData.feelsLike} </p>
          </div>
        </div>

        <div className="weatherdata">
          <p>humidity: {props.weatherData.humidity}</p>
          <p> Wind Speed: {props.weatherData.windSpeed} </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
