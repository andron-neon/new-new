import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
// export type ChangeTasksType = "all" | "active" | "completed"

function App() {
    let [tasks, setTasks] = useState([
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS/TS", isDone:false},
        {id:3, title:"Redux", isDone:true},
        {id:4, title:"React", isDone:true},
        {id:5, title:"DotNet", isDone:false}
    ])


const removeTask =(elId:number)=> {
    // tasks=tasks.filter((el)=> el.id !== elId)  можно так
    // setTasks(tasks)
    setTasks(tasks.filter((el)=> el.id !== elId))// а можно так
}
//     const [filterValue, setFilterValue] = useState("all")
//
// let filteredTasks = tasks
//     if (filterValue === "active") {
//         filteredTasks = tasks.filter(el=> !el.isDone)
//     }
//     if (filterValue === "completed") {
//         filteredTasks = tasks.filter(el=> el.isDone)
//     }
//
// const changeTasksFilter = (buttonName:string) => {
//         setFilterValue(buttonName)
// }


    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasks}
                      removeTask={removeTask}
            />

        </div>
    );
}

export default App;
