import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import { Task, TasksProps } from '../types';

type Props = TasksProps & {};

const ListScreen: React.FC<Props> = ({ tasks, setTasks, updateTaskCompletion }) => {
    const [newTaskLabel, setNewTaskLabel] = useState('');

    const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) => 
        setNewTaskLabel(e.target.value);

    const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && newTaskLabel !== '') {
            setTasks(tasks => [
                ...tasks, 
                { id: nanoid(), label: newTaskLabel, isComplete: false },
            ]);
            setNewTaskLabel('');
        }
    };

    const handleTaskCompleteChange = (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
        updateTaskCompletion(handledTask.id, e.target.checked);
    };

    const handleTaskDeleteClick = (handledTask: Task) => () => {
        setTasks(tasks => tasks.filter(task => task.id !== handledTask.id))
    };

    const handleClearClick = () => 
        setTasks(tasks => tasks.filter(task => !task.isComplete))
    
    return (
        <div>
            <div>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <input 
                            type="checkbox" 
                            checked={task.isComplete} 
                            onChange={handleTaskCompleteChange(task)}
                        />{' '}
                        {task.label}
                        <button onClick={handleTaskDeleteClick(task)}>delete</button>
                    </div>
                ))}
            </div>
            <input 
                value={newTaskLabel} 
                onChange={handleNewTaskLabelChange} 
                onKeyPress={handleNewTaskKeyPress} 
            />
            <div>
                <button onClick={handleClearClick}>clear completed</button>
            </div>
        </div>
    );
};

export default ListScreen;