import React from 'react';
import useTaskStore from '../hooks/use-task-store';

type Props = {};

const FocusScreen: React.FC<Props> = () => {
    const { 
        focusedTask: task, 
        shuffleFocusedTask, 
        updateTaskCompletion 
    } = useTaskStore();

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