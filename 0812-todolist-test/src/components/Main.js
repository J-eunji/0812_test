import { FaTrashAlt } from "react-icons/fa";
import styled, { css } from "styled-components";

export default function Main({ state, onToggle, onRemove }) {
  const TextList = state.todoList.map((todo) => (
    <Item key={"item"} onClick={() => onToggle()}>
      {todo.text}
      <FaTrashAlt
        onClick={(e) => {
          e.preventDefault();
          onRemove();
        }}
      />
    </Item>
  ));
  // const done = state.todoList.map((todo) => todo.done);
  return <ListBox key={"hahaha"}>{TextList}</ListBox>;
}

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 15px;
  border-bottom: lightgray 1px solid;
  cursor: pointer;
  user-select: none;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
      color: lightgray;
    `}
`;
