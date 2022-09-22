const { json } = require('express')
const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')

//get all workout
const getWorkouts = async (req, res)=>{
    const workout = await Workout.find({}).sort({createdAt : -1})
    res.status(200).json(workout)
}

//get a single workout
const getWorkout = async (req,res)=>{
    const {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no a valid id"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json(workout)
}


//create a new workout
const createWorkout = async(req,res)=>{
    const {title,load,reps} = req.body

    //Add doc to db
    try{
        const workout = await Workout.create({title,load,reps})
        res.json(workout)
    }catch(error){
        res.status(404).json({error:error.message})
    }
} 
//delete a workout
const deleteWorkout = async (req,res)=>{
    const {id} =req.params 
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no a valid id"})
    }

    const workout = await Workout.findByIdAndDelete({_id : id})

    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }

    res.status(200).json(workout)
}

//update of workout
const updateWorkout = async (req,res)=>{
    const {id} =req.params 
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no a valid id"})
    }

    const workout = await Workout.findByIdAndUpdate({_id : id},{
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }

    res.status(200).json(workout)
}

module.exports={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}