import styled from "styled-components";

export default function Header({ todoList }) {
  const todayDate = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  // filter는 Array에 적용되는 함수!!!! (map도 마찬가지)
  // 쓸거면 todoList를 Array로 만들어야 함.
  const count = todoList.filter((todo) => !todo.done).length;

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
