import {getAllTasks} from '../api/taskFetch';
import { init } from './slices/taskSlice';

export const getTasks=()=>{
    return (dispatch)=>{
        getAllTasks().then((tasks)=>{
            dispatch(
                init(tasks),
            )
        }).catch((error)=>{
            console.log(error)
        })
    }
}