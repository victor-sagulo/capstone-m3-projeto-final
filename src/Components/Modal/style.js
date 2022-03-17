import styled from "styled-components";

export const Modal = styled.section`

    display: flex;
    flex-direction: column;
    background-color: var(--cleanBlack);
    padding: 15px;
    width: 95%;
    height: 200px;
    max-width: 500px;
    margin: 25px auto;
    border-radius: 5px;

    h2 {
        margin: 15px;
        color: var(--white);
        padding: 5px;
        border-bottom: 2px solid var(--purple);
    }

    p {
        margin: 15px;
        color: var(--white);
    }

    span {
        display: inline-block;
        color: var(--purple);
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: var(--purple);
        text-transform: uppercase;
    }

`