import styled from "styled-components";

export const LikeButtonContainer = styled.div`
  width: 100px;

  button {
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      color: var(--purple);
      width: 100px;
      height: 100px;
    }
  }
`;
