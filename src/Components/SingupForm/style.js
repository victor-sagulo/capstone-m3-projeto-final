import styled from "styled-components";

export const FormDivContainer = styled.div`
  width: 286px;
  height: 519px;
  background-color: var(--cleanBlack);
  box-shadow: -4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 46px auto;
  color: white;

  h1 {
    font-size: 25px;
    padding-top: 25px;
    margin-bottom: 15px;
    color: var(--purple);
  }

  @media (min-width: 768px) {
    width: 480px;
    height: 746px;

    h1 {
      font-size: 40px;
      padding-top: 36px;
      margin-bottom: 21px;
    }
  }
`;
