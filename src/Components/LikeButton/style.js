import styled from "styled-components";

export const LikeButtonContainer = styled.div`
  width: 80px;

  button {
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      color: var(--purple);
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100px;
  }
`;
