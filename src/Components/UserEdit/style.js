import styled from "styled-components";

export const FormDivContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 500px;
    background-color: var(--cleanBlack);
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: white;
    padding: 20px 0;
  }
`;
