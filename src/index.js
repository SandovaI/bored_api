const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.get("/act", async (request, response) => {
  const url = "https://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  response.json(json.activity);
});

app.get("/bored", async (request, response) => {
  const url = "https://www.boredapi.com/api/activity/";
  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  response.json(json);
});

app.get("/param/:activity", async (request, response) => {
  const activity = request.params.activity;
  const url = `https://www.boredapi.com/api/activity?type=${activity}`;
  const fetch_response = await fetch(url);
  const json = await fetch_response.json();
  response.json(json.activity);
});

app.listen(port, function (req, res) {
  console.log("Listening at port: " + port);
});
