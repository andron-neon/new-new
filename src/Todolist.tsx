import React, {useState} from 'react';


type TodolistPropsType = {
    title: string
    tasks: Array<ArrayTaskType>
    removeTask:(elId:number)=> void


}
type ArrayTaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

    const [filterValue, setFilterValue] = useState("all")

    let filteredTasks = props.tasks
    if (filterValue === "active") {
        filteredTasks = props.tasks.filter(el=> !el.isDone)
    }
    if (filterValue === "completed") {
        filteredTasks = props.tasks.filter(el=> el.isDone)
    }

    const changeTasksFilter = (buttonName:string) => {
        setFilterValue(buttonName)
    }

    return (
        <div>
            <h3>{props.title}</h3>

            <div>
                <input/>
                <button>+</button>

                <ul>
                    {filteredTasks.map(el => {
                        return (
                            <li key={el.id}><input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={()=>props.removeTask(el.id)}>x</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={()=>changeTasksFilter("all")}>All</button>
                    <button onClick={()=>changeTasksFilter("active")}>Active</button>
                    <button onClick={()=>changeTasksFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
};

