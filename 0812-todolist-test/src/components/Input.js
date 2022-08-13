import styled from "styled-components";

// App.js에서 불러온 함수는 ()로 호출을 꼭 해주자
export default function Input({ onCreate, onChange, onReset, input }) {
  const onSubmit = () => {
    input !== "" ? onCreate(input) : alert("내용을 입력해주세요.");
    onReset();
  };
  return (
    <InputBox>
      <input key="input" type="text" onChange={onChange} value={input} />
      <button onClick={() => onSubmit()}>+</button>
    </InputBox>
  );
}

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 15px;
  input {
    height: 35px;
    margin: 5px 0;
    padding: 5px;
  }
  button {
    height: 30px;
    border: none;
    background-color: lightgray;
    cursor: pointer;
    &:hover {
      background-color: gray;
    }
  }
`;
