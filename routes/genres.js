const express = require("express");
const Genre = require("../genre");
const Joi = require("joi");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(Genre.getGenres());
});

router.post("/", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  res.send(Genre.addGenre(req.body.name));
});

router.get("/:id", (req, res) => {
  const course = Genre.getGenre(parseInt(req.params.id));
  if (!course)
    //404
    res.status(404).send("The course with the given ID was not found.");
  else res.send(course);
});

module.exports = router;
