const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    }, 
    // Bicep curl
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
                min: 0,
                max: 20    
            },
            weights: {
                type: Number,
                trim: true,
                min: 0,
                max: 100  
            },
            reps: {
                type: Number,
                trim: true,
                min: 0,
                max: 10    

            },
            sets: {
                type: Number,
                trim: true,
                min: 0,
                max: 4    
            }
        }
    ],
    // Lateral Pull
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
                min: 0,
                max: 20    
            },
            weights: {
                type: Number,
                trim: true,
                min: 0,
                max: 200    
            },
            reps: {
                type: Number,
                trim: true,
                min: 0,
                max: 20   

            },
            sets: {
                type: Number,
                trim: true,
                min: 0,
                max: 4   
            }
        }
    ],
    // Push press
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
                min: 0,
                max: 25  
            },
            weights: {
                type: Number,
                trim: true,
                min: 0,
                max: 185
            },
            reps: {
                type: Number,
                trim: true,
                min: 0,
                max: 8   

            },
            sets: {
                type: Number,
                trim: true,
                min: 0,
                max: 4   
            }
        }
    ],
    // Running
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
                min: 0,
                max: 20    
            },
            distance: {
                type: Number,
                trim: true,
                required: "Enter distance"
            }
        }
    ],

    // Bench Press 1
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
                min: 0,
                max: 20    
            },
            weights: {
                type: Number,
                trim: true,
                min: 0,
                max: 285   
            },
            reps: {
                type: Number,
                trim: true,
                min: 0,
                max: 10    

            },
            sets: {
                type: Number,
                trim: true,
                min: 0,
                max: 4    
            }
        }
    ],
    // Bench Press 2
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
                min: 0,
                max: 30    
            },
            weights: {
                type: Number,
                trim: true,
                min: 0,
                max: 300    
            },
            reps: {
                type: Number,
                trim: true,
                min: 0,
                max: 10    

            },
            sets: {
                type: Number,
                trim: true,
                min: 0,
                max: 4    
            }
        }
    ],
    // Quad Press
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
                min: 0,
                max: 30    
            },
            weights: {
                type: Number,
                trim: true,
                min: 0,
                max: 300    
            },
            reps: {
                type: Number,
                trim: true,
                min: 0,
                max: 10    

            },
            sets: {
                type: Number,
                trim: true,
                min: 0,
                max: 4    
            }
        }
    ],
    // Bench Press 3
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
                min: 0,
                max: 20    
            },
            weights: {
                type: Number,
                trim: true,
                min: 0,
                max: 300    
            },
            reps: {
                type: Number,
                trim: true,
                min: 0,
                max: 10    

            },
            sets: {
                type: Number,
                trim: true,
                min: 0,
                max: 4    
            }
        }
    ],
    // Military Press
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
                min: 0,
                max: 20    
            },
            weights: {
                type: Number,
                trim: true,
                min: 0,
                max: 300    
            },
            reps: {
                type: Number,
                trim: true,
                min: 0,
                max: 10    

            },
            sets: {
                type: Number,
                trim: true,
                min: 0,
                max: 4    
            }
        }
    ],
    // Bench
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
                min: 0,
                max: 20    
            },
            distance: {
                type: Number,
                trim: true,
                required: "Enter distance"
            }

        }
    ]

});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;