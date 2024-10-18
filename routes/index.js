var express = require("express");
var router = express.Router();
const Place = require("../models/places");

router.post("/places", (req, res) => {
  const newPlace = new Place({
    nickname: req.body.nickname,
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  newPlace.save().then((data) => {
    res.json({ Place: data, result: true });
  });
});

router.get("/places/:nickname", (req, res) => {
  Place.find({ nickname: req.params.nickname }).then((data) => {
    res.json({
      result: true,
      places : data
    });
  });
});

router.delete("/places", (req,res) => {
    Place.deleteMany({nickname : req.body.nickname , name : req.body.name})
    .then()
    res.json({result : true , info : "Place deleted"})
})

module.exports = router;
