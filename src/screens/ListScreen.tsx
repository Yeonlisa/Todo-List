import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../components/Checkbox';
import IconButton from '../components/IconButton';
import Spacer from '../components/Spacer';
import TextButton from '../components/TextButton';
import useTaskStore from '../hooks/use-task-store';
import DeleteIcon from '../icons/DeleteIcon';
import { Task } from '../types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 460px;
`;

const List = styled.div`
    background: #1F6675;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 45px 24px;
`;

const ListItem = styled.label`
    align-items: center;
    display: flex;
    font-size: 18px;
    padding: 4px 0;
`;

const DeleteButton = styled(IconButton)`
    visibility: hidden;

    ${ListItem}:hover & {
        visibility: visible;
    }
`;

const Input = styled.input`
    background: #02343F;
    border: none;
    border-radius: 15px;
    color: #F0EDCC;
    padding: 20px 24px;
`;

type Props = {};

const ListScreen: React.FC<Props> = () => {
    const { addTask, tasks, setTasks, updateTaskCompletion } = useTaskStore();
    const [newTaskLabel, setNewTaskLabel] = useState('');

    const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) => 
        setNewTaskLabel(e.target.value);

    const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && newTaskLabel !== '') {
            addTask({ label: newTaskLabel })
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
        <Container>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <Checkbox
                            checked={task.isComplete} 
                            onChange={handleTaskCompleteChange(task)}
                        />
                        <Spacer width={24} />
                        {task.label}
                        <Spacer flex={1} />
                        <DeleteButton onClick={handleTaskDeleteClick(task)}>
                            <DeleteIcon />
                        </DeleteButton>
                    </ListItem>
                ))}
            </List>
            <Spacer height={30} />
            <Input 
                placeholder='Add your Task'
                value={newTaskLabel} 
                onChange={handleNewTaskLabelChange} 
                onKeyPress={handleNewTaskKeyPress} 
            />
            <Spacer height={45} />
            <TextButton onClick={handleClearClick} style={{ alignSelf: 'center' }}>
                clear completed
            </TextButton>
        </Container>
    );
};

export default ListScreen;