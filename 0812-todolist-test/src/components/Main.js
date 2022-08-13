import { FaTrashAlt } from "react-icons/fa";
import styled, { css } from "styled-components";

export default function Main({ todoList, onToggle, onRemove }) {
  const TextList = todoList.map((todo) => (
    <Item key={"item"} onClick={() => onToggle(todo.id)} done={todo.done}>
      <li>{todo.text}</li>
      <div>
        <FaTrashAlt
          size={17}
          onClick={(e) => {
            // preventDefalut는 함수니까 ()호출을 꼭 해주자
            e.preventDefault();
            onRemove(todo.id);
          }}
        />
      </div>
    </Item>
  ));
  return <ListBox>{TextList}</ListBox>;
}

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
`;

const Item = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 15px;
  border-bottom: lightgray 1px solid;
  cursor: pointer;
  user-select: none;
  li {
    ${({ done }) =>
      done &&
      css`
        text-decoration: line-through;
        color: lightgray;
      `}
  }
  div {
    opacity: 0.1;
    &:hover {
      opacity: 1;
    }
  }
`;
