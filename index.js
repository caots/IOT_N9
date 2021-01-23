const mqtt = require("mqtt");
const express = require("express");
const path = require("path");
const settings = require("./config/mqtt.config");
const { getData } = require("./models/getWeatherData.model");
const app = express();
app.set("view engine", "ejs");

// call mqtt
const client = mqtt.connect(
  `mqtt://${settings.mqttServerUrl}:${settings.port}`,
  { username: settings.username, password: settings.password }
);

client.on("connect", () => {
  setInterval(() => {
    const getWeatherData = getData();
    getWeatherData.then((data) => {
      client.publish(settings.topicTime, JSON.stringify(data));
    });
  }, 1000 * 5);
});

// view ui
app.get("/", function (req, res) {
  const labels = ["0h-6h", "6h-9h", "9h-12h", "12h-18h", "18h-22h", "22h-24h"];
  const dataDoAm = [20, 24, 26, 25, 20, 19];
  const dataLuongNuoc = [75, 79, 76, 72, 71, 70];
  res.render("index", {
    labels: labels,
    dataDoAm: dataDoAm,
    dataLuongNuoc: dataLuongNuoc,
  });
});

const server = app.listen(5000, () => {
  console.log(`Server running → PORT ${server.address().port}`);
});
