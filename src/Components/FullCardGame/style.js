import styled from "styled-components";

export const Mobile = styled.div`
  width: 95%;
  display: flex;
  max-width: 1166px;
  margin: 15px auto;
  border-radius: 5px;
  background-color: var(--cleanBlack);
  height: 450px;

  @media(min-width: 768px) {
    height: 310px;
  }

  .game-image {
    border-radius: 5px 5px 0px 0px;
    height: 160px;
    width: 130px;
    margin: 15px;
    object-fit: cover;
    filter: drop-shadow(0px 0px 8px var(--white));
  }

  .info-holder {

    display: flex;
    flex-direction: column;
    font-size: 1rem;

    span {
      margin: 5px 0 5px 5px;
      color: var(--purple);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .game-plataform {
    display: flex;

    h4 {
      color: var(--purple);
      margin: 0 5px;
    }

    span {
      color: var(--white);
      margin: 0 5px;
    }
  }

  .game-description {
    padding: 5px;
    color: var(--white);
    font-size: 0.7rem;

    div {
      margin: 10px 0;
    }

    @media(min-width: 780px) {
      font-size: 0.9rem;
    }

  }
`;

export const MoreHide = styled.div`
  display: none;
`;

export const More = styled.div`
  display: flex;
`;
