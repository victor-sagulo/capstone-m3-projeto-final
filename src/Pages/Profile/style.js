import styled from "styled-components";

export const DivProfileContainer = styled.div`
  margin: 0 auto;
  display: flex;
  color: white;
  flex-flow: column;

  @media (min-width: 700px) {
    width: 80%;
    width: 95%;
    max-width: 1166px;
    flex-flow: row;
  }
`;

export const ContentWraper = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (min-width: 700px) {
    width: 70%;
  }
`;
