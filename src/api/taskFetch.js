import {v4 as uuid} from 'uuid';

export const getAllTasks=()=>{
    return new Promise((resolve)=>{
    
    setTimeout(()=>{
   
    resolve([
        {id:uuid(),title:'Task from server 1'},
        {id:uuid(),title:'Task from server 2'},
        {id:uuid(),title:'Task from server 3'},   
    ])
     },1000);
    })
}