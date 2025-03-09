import React, { useEffect, useReducer} from "react";
import { Data } from "./services/api";
import clear from "./assets/images/bg/clear.jpg"
import cloudsnight from "./assets/images/bg/clouds-night.jpg"
import clouds from "./assets/images/bg/clouds.jpg"
import mist from "./assets/images/bg/mist.jpg"
import night from "./assets/images/bg/night.jpg"
import rain from "./assets/images/bg/rain.jpg"
import snow from "./assets/images/bg/snow.jpg"
import thunderstorm from "./assets/images/bg/thunderstorm.jpg"
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import "./App.css";
const initialState = { weather: null, input: "Addis Ababa", city: "Addis Ababa", error: null };
const reducer = (state,action) => {
  switch (action.type) {
    case "input":
      return { ...state,input: action.payload.value };
    case "city":
      return { ...state, city: action.payload.value };
    case "weather":
      return { ...state, weather: action.payload.value };
    case "error":
      return { ...state, error: action.payload.value }  
    default:
      return state;
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({type: "error",payload: {value: null}}) // Reset error before fetching
        const response = await Data(state.city); 
        dispatch({type: "weather",payload: {value: response}})
      } catch (error) {
        console.error("Error fetching weather data:", error);
        dispatch({type: "error",payload: {value: "City not found. Please try again."}}) // Reset error before fetching
        dispatch({type: "weather",payload: {value: null}})
      }
    };
    fetchData();
  }, [state.city]);
  useEffect(() => {
    if (state.weather) {
      document.documentElement.style.background = getBackgroundImage();
    }
  }, [state.weather]);
  const getBackgroundImage = () => {
    if (!state.weather) return `url(${night})`; // Default color if no data

    const condition = state.weather.weather[0].main.toLowerCase();
    switch (condition) {
      case "clear":
        return `url(${clear})`; // Sunny background
      case "clouds":
        return `url(${clouds})`; // Cloudy background
      case "rain":
        return `url(${rain})`; // Rainy background
      case "thunderstorm":
        return `url(${thunderstorm})`; // Thunderstorm background
      case "snow":
        return `url(${snow})`; // Snow background
      case "mist":
        return `url(${mist})`; // Snow background
      case "fog":
        return `url(${mist})`; // Foggy background
      default:
        return `url(${cloudsnight})`; // Default background
    }
  };

  return (
    <>
      <div className="container">
        {state.weather ? (
          <>
            <LeftContainer
              temperature={Math.round(state.weather.main.temp)}
              city={state.weather.name}
              date={new Date().toDateString()}
            />
            <RightContainer
              handleClick={()=> {dispatch({type: "city", payload: {value: state.input}})}}
              handleChange={(e)=> {dispatch({type: "input", payload: {value: e.target.value}})}}
              value={state.input}
              tempmax={state.weather.main.temp_max}
              tempmin={state.weather.main.temp_min}
              humidity={state.weather.main.humidity}
              cloudy={state.weather.clouds.all}
              wind={state.weather.wind.speed}
            />
          </>
        ) : (
          <p>Loading or No Data Available...</p>
        )}
      </div>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </>
  );
};

export default App;
