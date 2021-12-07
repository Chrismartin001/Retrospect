const router = require("express").Router();
const express = require("express");
const fs = require("fs");
const uuid = require("uuid");

let reviewList = [];

const grabReviews = () => {
  fs.readFile("./data/Reviews.json", (err, data) => {
    if (err) {
      console.log(err);
    }
    reviewList = JSON.parse(JSON.stringify(data));
  });
};

grabReviews();

router.get("/", (req, res) => {
  res.json(reviewList);
});

router.get("/:id", (req, res) => {
  const strippedData = reviewList.find((review) => {
    return review.id === req.params.id;
  });
  if (!strippedData) {
    res.status(404).send("Review not found!");
  }
  res.json(strippedData);
});

router.post("/", (req, res) => {
  const { name, description, link } = req.body;

  const newReview = {
    name,
    review,
    rating,
    timestamp: Date.now(),
    id: uuid(),
  };
  reviewList.push(newReview);

  fs.writeFile("./data/reviews.json", JSON.stringify(reviewList), (err) => {
    if (err) {
      res.status(500).send("Post was unsuccessful!");
    }
    res.json(reviewList);
  });
});

module.exports = router;
