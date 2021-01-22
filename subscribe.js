const mqtt = require("mqtt");
const settings = require("./config/mqtt.config");

const client = mqtt.connect(
  `mqtt://${settings.mqttServerUrl}:${settings.port}`,
  { username: settings.username, password: settings.password }
);

client.on("connect", () => {
  client.subscribe(settings.topicTime);
  // client.subscribe(settings.topicWeather);
  // client.subscribe(settings.topicTemp);
  // client.subscribe(settings.topicCity);
});

client.on("message", (topic, message) => {
  console.log(JSON.parse(message));
  // if (topic === settings.topicCity) {
  //   console.log("----------------------");
  // }
});
