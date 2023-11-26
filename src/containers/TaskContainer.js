import React, { useEffect, useState } from "react";
import NewTask from "../components/NewTask";
import TaskList from "../components/TaskList";
import { useAutoAnimate } from "@formkit/auto-animate/react";


export default function TaskContainer() {
    const [newTask, setNewTask] = useState({
        task: '',
        id: null
    });
    const [taskList, setTaskList] = useState(() => {
        const temp = localStorage.getItem('taskList');
        const savedTodos = JSON.parse(temp);
        return (savedTodos || []);
    });
    const [visible, setVisible] = useState({});

    const [parent, enableAnimations] = useAutoAnimate();

    useEffect(() => {
        const temp = JSON.stringify(taskList);
        localStorage.setItem('taskList', temp);
    }, [taskList]);


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask(prev => ({...prev, id: Date.now(), [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.task.trim() !== '') {
            setTaskList(prev => [newTask, ...prev]);
        }
        setNewTask({
            task: '',
            id: null
        });
    }

    const handleDelete = id => {
        setTaskList(prev => prev.filter(
            (task) => task.id !== id
        ))
    }

    return (
        <div>
            <NewTask handleChange={handleChange} handleSubmit={handleSubmit} newTask={newTask} />
            <TaskList handleDelete={handleDelete} taskList={taskList} parent={parent} setVisible={setVisible} visible={visible} />
        </div>
    )

}