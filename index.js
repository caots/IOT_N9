const mqtt = require("mqtt");
const settings = require("./config/mqtt.config");
const { getData } = require("./models/getWeatherData.model");

const client = mqtt.connect(
  `mqtt://${settings.mqttServerUrl}:${settings.port}`,
  { username: settings.username, password: settings.password }
);

client.on("connect", () => {
  setInterval(() => {
    const getWeatherData = getData();
    getWeatherData.then((data) => {
      client.publish(settings.topicTime, JSON.stringify(data));
      // client.publish(settings.topicWeather, data.weather);
      // client.publish(settings.topicTemp, data.temp.toString());
      // client.publish(settings.topicCity, data.city);
    });
  }, 1000 * 5);
});
