import styled from "styled-components";

export default function Header({ state }) {
  const todayDate = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  const count = state.todoList.filter((todo) => todo.id).length;

  return (
    <HeaderBox>
      <h5>TodoList</h5>
      <h2>{todayDate}</h2>
      <p>할 일 : {count}개</p>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  width: 100%;
  height: 100px;
  border-bottom: lightgray 1px solid;
`;
