import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout}) => {
    
    const {dispatch} = useWorkoutsContext()

    const handleClick = async ()=>{
        const response = await fetch('/api/workouts/'+ workout._id,{
            method : 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type : 'DELETE_WORKOUT',payload : json}) //to remove it from UI
        }
    }

    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>LOAD (Kg) : </strong>{workout.load}</p>
            <p><strong>REPS : </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
     );
}
 
export default WorkoutDetails;