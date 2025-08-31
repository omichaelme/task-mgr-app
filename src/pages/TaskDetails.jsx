import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
`;

const TaskCard = styled.div`
  background: ${props => props.completed ? '#d4edda' : 'white'};
  border: 1px solid ${props => props.completed ? '#c3e6cb' : '#dee2e6'};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const TaskTitle = styled.h2`
  color: ${props => props.completed ? '#155724' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  margin-bottom: 1rem;
`;

const StatusSection = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: ${props => props.completed ? '#28a74520' : '#ffc10720'};
  border-radius: 8px;
  border-left: 4px solid ${props => props.completed ? '#28a745' : '#ffc107'};
`;

const StatusBadge = styled.span`
  background: ${props => props.completed ? '#28a745' : '#ffc107'};
  color: ${props => props.completed ? 'white' : '#212529'};
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.2s;
`;

const BackButton = styled(Button)`
  background: #6c757d;
  color: white;

  &:hover {
    background: #545b62;
  }
`;

const EditButton = styled(Button)`
  background: #007bff;
  color: white;

  &:hover {
    background: #0056b3;
  }
`;

const TaskInfo = styled.div`
  margin: 1rem 0;
`;

const InfoLabel = styled.strong`
  color: #495057;
`;

function TaskDetails({ tasks = [] }) {
  const { id } = useParams();
  const taskId = parseInt(id);
  const task = tasks.find(t => t.id === taskId);

  // If task not found, redirect to 404
  if (!task) {
    return <Navigate to="/404" replace />;
  }

  return (
    <DetailsContainer>
      <TaskCard completed={task.completed}>
        <TaskTitle completed={task.completed}>
          {task.completed ? '✅' : '📝'} {task.text}
        </TaskTitle>

        <StatusSection completed={task.completed}>
          <InfoLabel>Status: </InfoLabel>
          <StatusBadge completed={task.completed}>
            {task.completed ? '✅ Completed' : '⏳ In Progress'}
          </StatusBadge>
        </StatusSection>

        <TaskInfo>
          <InfoLabel>Task ID: </InfoLabel>
          <span>#{task.id}</span>
        </TaskInfo>

        <TaskInfo>
          <InfoLabel>Created: </InfoLabel>
          <span>{new Date().toLocaleDateString()}</span>
        </TaskInfo>

        <TaskInfo>
          <InfoLabel>Priority: </InfoLabel>
          <span>Medium</span>
        </TaskInfo>

        <ActionButtons>
          <BackButton to="/tasks">
            ← Back to Tasks
          </BackButton>
          <EditButton to="/tasks">
            ✏️ Edit Task
          </EditButton>
        </ActionButtons>
      </TaskCard>
    </DetailsContainer>
  );
}

export default TaskDetails;