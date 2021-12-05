const router = require("express").Router();
const express = require("express");
const fs = require("fs");
const uuid = require("uuid");

let websiteList = [];

const grabWebsites = () => {
  fs.readFile("./data/websites.json", (err, data) => {
    if (err) {
      console.log(err);
    }
    websiteList = JSON.parse(JSON.stringify(data));
  });
};

grabWebsites();

router.get("/", (req, res) => {
  res.json(websiteList);
});

router.get("/:id", (req, res) => {
  const strippedData = websiteList.find((website) => {
    return website.id === req.params.id;
  });
  if (!strippedData) {
    res.status(404).send("Website not found!");
  }
  res.json(strippedData);
});

router.post("/", (req, res) => {
  const { name, description, link } = req.body;

  const newWebsite = {
    name,
    description,
    link,
    timestamp: Date.now(),
    id: uuid(),
  };
  websiteList.push(newWebsite);

  fs.writeFile("./data/websites.json", JSON.stringify(websiteList), (err) => {
    if (err) {
      res.status(500).send("Post was unsuccessful!");
    }
    res.json(websiteList);
  });
});

module.exports = router;
