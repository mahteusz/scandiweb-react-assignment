import styled from "styled-components";


export const Container = styled.div`
    position:absolute;
    top:40px;
    left:0px;
    box-shadow: 0px 0px 10px rgba(168, 172, 176, 0.5);
    background-color:white;
    z-index:10;

    &:hover {
        color:black;
    }  
`

export const CurrencyContainer = styled.div`
    padding: 8px 20px;
    position:relative;

    &:hover {
        background-color:#EEEEEE;
    }
`

export const CurrencyItem = styled.span`
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    margin:0 2px;
`