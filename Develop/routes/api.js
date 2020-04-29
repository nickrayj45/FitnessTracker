const router = require("express").Router();
const Workout = require("../models/workout");

// This is using the router method in order to
router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  });

  router.delete("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndDelete(params.id, { $push: { exercises: body } })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  });

  module.exports = router;

