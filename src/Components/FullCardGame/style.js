import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  max-width: 1166px;
  margin: 50px auto 0 auto;
  border-radius: 5px;
  background-color: var(--cleanBlack);
  z-index: 1;
  overflow: hidden;

  .img-holder {
    position: relative;
    .game-image {
      border-radius: 5px 5px 0px 0px;
      height: 160px;
      width: 100%;
      object-fit: cover;
      @media screen and (min-width: 500px) {
        height: 200px;
      }
      @media screen and (min-width: 600px) {
        height: 250px;
      }
      @media screen and (min-width: 768px) {
        filter: blur(3px);
        filter: brightness(0.7);
        opacity: 0.2;
        height: 800px;
        border-radius: 5px;
        position: absolute;
        left: 0px;
        z-index: 2;
        object-fit: cover;
      }
    }
  }

  .info-holder {
    z-index: 3;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    align-items: flex-start;

    h3.game--name {
      color: var(--purple);
      margin: 5px 0 5px 5px;
      background-color: var(--grey);
      padding: 5px;
      border-radius: 3px;
    }

    h3 {
      color: var(--purple);
      margin: 5px 0px;
    }

    div.single--info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      width: 100%;
      margin: 5px 0 5px 5px;
      h4 {
        font-size: 15px;
        color: var(--purple);
      }
      .infos--details{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--white);
        padding-right: 5px;
      }
      span {
        font-size: 12px;
        margin-left: 2px;
        color: var(--white);
      }
    }
    .game-description {
      padding: 5px;
      color: var(--white);
      font-size: 10px;
      text-align: left;
      margin-bottom: 10px;

      @media (min-width: 780px) {
        font-size: 0.9rem;
      }
    }
    @media screen and (min-width: 768px) {
      div.single--info {
        margin: 10px 0 10px 25px;
        h4 {
          font-size: 18px;
        }
        span {
          font-size: 14px;
        }
      }
      h3.game--name {
        margin: 15px 0 5px 25px;
        font-size: 23px;
        color: var(--white);
        padding: 10px;
        background-color: var(--purple);
      }
      h3 {
        font-size: 16px;
      }
      .game-description {
        padding-left: 25px;
      }
    }
  }

  .arrow-buttom {
    align-self: center;
    color: var(--purple);
  }
`;

export const More = styled.div`
  display: flex;
`;
