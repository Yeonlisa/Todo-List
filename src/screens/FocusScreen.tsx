import React from 'react';
import { TasksProps } from '../types';

type Props = TasksProps & {};

const FocusScreen: React.FC<Props> = ({ 
    focusedTask: task,
    shuffleFocusedTask, 
    updateTaskCompletion 
}) => {
    const handleMarkCompleted = () => {
        if(task) updateTaskCompletion(task.id, true);
    };

    return task ? (
        <div>
            <div>{task.label}</div>
            <button onClick={handleMarkCompleted}>Mark completed</button>
            <button onClick={shuffleFocusedTask}>nope</button>
        </div> 
        ) : (
            <div>No incomplete tasks. Yeah!</div>
        );
}

export default FocusScreen;