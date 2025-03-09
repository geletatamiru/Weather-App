import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = "https://api.openweathermap.org/data/2.5/weather";

export const Data = async (city) => {
  try {
    const response = await axios.get(`${url}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("City not found. Please enter a valid city.");
    } else {
      throw new Error("Something went wrong. Please try again later.");
    }
  }
};
