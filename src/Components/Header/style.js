import styled from "styled-components";

export const Desktop = styled.header`
    margin-top: 25px;
    width: 95%;
    max-width: 1166px;
    height: 84px;
    border-radius:5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--cleanBlack);
    margin-inline: auto;
    nav{
        width: 65%;
        display: flex;
    }
    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
        min-width: 250px;
        margin-left: 5px;
        li{
            a{
                color: var(--white);
                text-decoration: none;
                font-family: var(--mainFont);
                font-weight: 700;
            }
        }
    }
    form{
        width: 60%;
    }
`

export const Mobile = styled.header`
    margin-top: 25px;
    width: 95%;
    height: 84px;
    border-radius:5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--cleanBlack);
    margin-inline: auto;
    div{
        display: flex;
        align-items: center;
        gap: 12px;
        .hamburger{
            color: var(--white);
        }
    }
`

export const DefaultNav = styled.nav`
    
`

export const LoggedNav = styled.nav`
    background-color: green;
`