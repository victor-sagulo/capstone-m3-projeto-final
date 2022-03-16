import styled from "styled-components";

export const FormDivContainer = styled.div`

  background-color: var(--cleanBlack);
  box-shadow: -4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 75%;
  max-width: 500px;
  margin: 46px auto;
  color: var(--white);
  padding: 10px;

  h1 {
    font-size: 40px;
    padding-top: 25px;
    margin-bottom: 15px;
    color: var(--purple);
  }

  span {
    display: inline-block;
    margin: 15px;

    a {
        margin: 0 5px;
        text-decoration: none;
        text-transform: uppercase;
    }

  }
`;
