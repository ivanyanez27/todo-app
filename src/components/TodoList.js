import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    // Sample tasks
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true, 
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);
    const [text, setText] = useState('');
    
    // Add tasks to list
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    // Delete tasks to list
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // Add toggle button for completed/uncompleted task
    function toggleTask(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                />
            ))}
            <input
                value={text}
                onChange={evt => setText(evt.target.value)}
            />
            <button onClick={() => addTask(text)}>Add Task</button>
        </div>
    );
}

export default TodoList;