const axios = require("axios");
const apiUrl = require("../config/apiWeather.config");
const dateTime = require("./datetime.model");

const analyzeData = (data) => {
  let result = {};
  console.log(data.main);
  result.time = dateTime.getDateTime();
  result.weather = data.weather[0].main;
  result.temperature = data.main.temp + '*C';
  result.city = data.name;
  result.humidity = data.main.humidity + 'mm';
  return result;
};

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
