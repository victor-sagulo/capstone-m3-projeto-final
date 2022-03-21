import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  width: 289px;
  height: 118px;
  border-radius: 5px;
  padding-top: 15px;
  background-color: var(--blackComment);

  .img-holder {
    width: 40px;
    height: 40px;
    background-color: var(--purple);
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .content-holder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 235px;
    margin-top: -6px;
    margin-right: 10px;
  }

  .name {
    font-size: 16px;
    color: var(--white);
    font-weight: bold;
  }

  .comment {
    font-size: 7px;
    color: var(--grey);
    text-align: start;
    min-height: 80px;
    overflow-y: scroll;
  }

  .like-holder {
    align-self: end;
    color: var(--white);
    font-size: 12px;
  }

  .like-icon {
    color: var(--purple);
    margin-top: 5px;
    margin-left: 10px;
  }
`;

export const Game = styled.div`
  display: flex;
  width: 653px;
  height: 136px;
  border-radius: 5px;
  padding-top: 15px;
  background-color: var(--blackComment);

  .img-holder {
    width: 55px;
    height: 55px;
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .img-user-comment {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .content-holder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 565px;
    margin-top: -6px;
  }

  .name {
    font-size: 18px;
    color: var(--white);
    font-weight: bold;
  }

  .comment {
    font-size: 10px;
    color: var(--grey);
    text-align: start;
    min-height: 85px;
    overflow-y: scroll;
  }

  .like-holder {
    align-self: end;
    color: var(--white);
    font-size: 16px;
  }

  .like-icon {
    color: var(--purple);
    margin-top: 5px;
    margin-left: 10px;
  }
`;
