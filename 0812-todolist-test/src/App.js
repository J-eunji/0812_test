import { useReducer, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Input from "./components/Input";
import Main from "./components/Main";

function App() {
  const initialState = {
    input: "",
    todoList: [
      {
        id: 1,
        text: "클릭하면 할 일 완료!",
        done: false,
      },
    ],
  };

  const currentId = useRef(1);

  const reducer = (state, action) => {
    switch (action.type) {
      case "create":
        return {
          ...state,
          todoList: [
            ...state.todoList,
            // .current로 최신값 들어가게 해야 함
            // action.text = input
            { id: currentId.current, text: action.text, done: false },
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
          // value 값을 그대로 전달하면 event 자체가 전달됨.
          // target.value를 전달해 값을 전달해야 함.
          // e.target.value 는 <input value="여기"> 랑 연결되어 있다.
          input: action.e.target.value,
        };
      case "reset":
        return {
          ...state,
          input: "",
        };
      default:
        return { state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { input, todoList } = state;

  // (매개변수)로 받아온 값을 전달한 컴포넌트에 사용해야 한다.
  // ex) 컴포넌트에서 사용할 때
  //     onCreate() 틀림
  //     onCreate(여기에 text(매개변수)로 전달될 무언가를 넣자!!)
  //     그래야 reducer 함수 action.매개변수 에 전달되어
  //     reducer 함수가 제대로 실행된다.
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
  const onReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <GlobalStyle />
      <Position>
        <Container>
          <Header todoList={todoList} />
          <Main todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
          <Input
            onCreate={onCreate}
            onChange={onChange}
            onReset={onReset}
            input={input}
          />
        </Container>
      </Position>
    </>
  );
}

// 컴포넌트 안에서 styled-component를 불러오니
// 문제는 없지만 콘솔창에 노란색 error 창이 떠서
// GlobalStyle을 바깥에 선언함.
const GlobalStyle = createGlobalStyle`
    * {
      list-style: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;

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
