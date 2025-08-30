import styled from 'styled-components';

const TaskItemContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => (props.isCompleted ? "#d4edda" : "lightgray")};
  border-radius: 5px;
  margin: 5px;
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
  opacity: ${(props) => (props.isCompleted ? 0.6 : 1)};
`;

function TaskItem({ task }) {
    return (
        <TaskItemContainer isCompleted={task.isCompleted}>
            <TaskText isCompleted={task.isCompleted}>{task.text}</TaskText>
            <button>Toggle</button>
        </TaskItemContainer>
    );
}

export default TaskItem;