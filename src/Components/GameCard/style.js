import styled from "styled-components";

export const LiCardGame = styled.li`
  height: 350px;
  width: 22.5%;
  min-width: 300px;
  border-radius: 8px;
  background: var(--blackComment);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px auto;

  img {
    border-radius: 8px 8px 0px 0px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    margin: auto 10px;
  }
`;
