const axios = require("axios");
const apiUrl = require("../config/apiWeather.config");
const dateTime = require("./datetime.model");

const analyzeData = (data) => {
  let result = {};
  result.time = dateTime.getDateTime();
  result.weather = data.weather[0].main;
  result.temperature =
    randomIntFromInterval(data.main.temp, data.main.temp + 20) + "*C";
  result.city = data.name;
  result.humidity = randomIntFromInterval(data.main.humidity, +10) + "%";
  return result;
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * max) + min;
}

const getData = async (res) => {
  try {
    res = await axios.get(apiUrl);
    let data = analyzeData(res.data);
    return data;
  } catch (err) {
    console.log("err: ", err);
  }
};

module.exports = { getData };
