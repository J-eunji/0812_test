import styled from "styled-components";

export default function Input({ onCreate, onChange, state }) {
  return (
    <InputBox>
      <input type="text" onChange={onChange} value={state.input} />
      <button onClick={() => onCreate(state.input)}>+</button>
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
