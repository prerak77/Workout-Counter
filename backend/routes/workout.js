const express = require('express')
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} = require('../controlers/workoutControler')

const router = express.Router()

// GET all workouts
router.get('/',getWorkouts)

// GET a single workouts
router.get('/:id',getWorkout)

// POST a new workouts
router.post('/',createWorkout)


// DELETE a workout
router.delete('/:id',deleteWorkout)

// UPDATE a single workouts
router.patch('/:id',updateWorkout)

                         
                    

module.exports = router