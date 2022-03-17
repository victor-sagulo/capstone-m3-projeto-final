import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 100px;
  label {
    text-align: left;
    display: block;
    width: 85%;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 85%;
    background: #c4c4c4;
    border-radius: 5px;
    border: none;
    height: 32px;
    margin: 13px 0;
    padding-left: 24px;

    &::placeholder {
      color: black;
    }
  }

  div{
    max-height: 35px;
    display: flex;
    align-items: left;
    padding-left: 32px;
    width: 85%;
    span {
      display: inline-block;
      margin: -5px 0 15px 0;
      font-size: 10.5px;
      color: var(--redError);
      text-align: left;
    }
  }

  form {
    margin: auto 0;
  }

  @media (min-width: 768px) {
    margin: 12px 0;
    label {
      font-size: 20px;
    }
    input {
      height: 46px;
    }
    div{
      span{
        font-size: 12px;
      }
    }
  }
`;
