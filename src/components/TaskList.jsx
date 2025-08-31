import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TaskListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
`;

const TaskCard = styled.div`
  background: ${props => props.completed ? '#d4edda' : 'white'};
  border: 1px solid ${props => props.completed ? '#c3e6cb' : '#dee2e6'};
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TaskText = styled.span`
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  opacity: ${props => props.completed ? 0.7 : 1};
  font-size: 1.1rem;
`;

const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled(Link)`
  background: #007bff;
  color: white;
  padding: 6px 12px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

const StatusBadge = styled.span`
  background: ${props => props.completed ? '#28a745' : '#ffc107'};
  color: ${props => props.completed ? 'white' : '#212529'};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

function TaskList({ tasks = [] }) {
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <TaskListContainer>
      <Header>
        <h2>📋 My Tasks</h2>
        <p>You have completed {completedCount} out of {tasks.length} tasks</p>
      </Header>

      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6c757d' }}>
          No tasks yet. <Link to="/">Go home</Link> to get started!
        </p>
      ) : (
        tasks.map(task => (
          <TaskCard key={task.id} completed={task.completed}>
            <div>
              <TaskText completed={task.completed}>
                {task.text}
              </TaskText>
              <br />
              <StatusBadge completed={task.completed}>
                {task.completed ? '✅ Completed' : '⏳ Pending'}
              </StatusBadge>
            </div>
            <TaskActions>
              <ActionButton to={`/tasks/${task.id}`}>
                View Details
              </ActionButton>
            </TaskActions>
          </TaskCard>
        ))
      )}
    </TaskListContainer>
  );
}

export default TaskList;