const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: () => new Date()
        }, 
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                }, 
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: "Enter the duration of the exercise"
                },
                weights: {
                    type: Number,
                },
                reps: {
                    type: Number,

                },
                sets: {
                    type: Number,
                }
            }
        ]
    },  
    {
        toJSON: {
            virtuals: true
        }
    }  
);  
// Write a virtual for a dynamic property 
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

// 