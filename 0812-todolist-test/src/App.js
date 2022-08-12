import { useReducer, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Input from "./components/Input";
import Main from "./components/Main";

function App() {
  const GlobalStyle = createGlobalStyle`
    * {
      list-style: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;

  const initialState = {
    input: "",
    todoList: [
      {
        id: 1,
        text: "첫 번째 할 일",
        done: false,
      },
    ],
  };

  const currentId = useRef(2);

  const reducer = (state, action) => {
    switch (action.type) {
      case "create":
        return {
          ...state,
          todoList: [
            ...state.todoList,
            { id: currentId, text: action.text, done: false },
          ],
        };
      case "remove":
        return {
          ...state,
          todoList: state.todoList.filter((todo) => todo.id !== action.id),
        };
      case "toggle":
        return {
          ...state,
          todoList: state.todoList.map((todo) =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo
          ),
        };
      case "change":
        return {
          ...state,
          input: action.e.target.value,
        };
      default:
        return { state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onCreate = (text) => {
    dispatch({ type: "create", text });
    currentId.current++;
  };
  const onRemove = (id) => {
    dispatch({ type: "remove", id });
  };
  const onToggle = (id) => {
    dispatch({ type: "toggle", id });
  };
  const onChange = (e) => {
    dispatch({ type: "change", e });
  };

  return (
    <>
      <GlobalStyle />
      <Position>
        <Container>
          <Header state={state} />
          <Main state={state} onToggle={onToggle} onRemove={onRemove} />
          <Input onCreate={onCreate} onChange={onChange} state={state} />
        </Container>
      </Position>
    </>
  );
}

const Position = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
  height: 500px;

  border: black 1px solid;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
