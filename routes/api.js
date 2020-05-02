const router = require("express").Router();
const Workout = require("../models/workout");

// This is using the router method in order to
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch((err) => {
    res.json(err);
    console.log(err);
  });
})

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, 
      { new: true, runValidators: true }
      )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  });

  router.delete("/api/workouts/", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  });

  module.exports = router;

