import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height:80px;
    display:flex;
    align-items:flex-end;
    background-color:white;
`
export const NavBar = styled.nav`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin: 0 100px;
`

export const NavContainer = styled.ul`
    display:flex;
    justify-content:space-around;
` 

export const MenuItem = styled.li`
    display:block;
    padding: 0px 16px 32px;

    ${props => {
        if(props.highlight){
            return `
                border-bottom:2px solid #5ECE7B;
            `
        }
    }}
`

export const CategoryName = styled(Link)`
    font-size:16px;
    font-weight:400;
    line-height: 120%;
    text-transform:uppercase;
    text-decoration:none;


    &:visited, &:focus {
        color:inherit;
    }

    &:hover {
        color: #5ECE7B;
        cursor:pointer;
    }

    ${props => {
        if(props.highlight){
            return `
                font-weight:600;
                color: #5ECE7B !important;
            `
        }
    }}

`

export const ActionItem = styled.li`
    display:block;
    padding: 0px 8px 32px;
    position:relative;
    display:flex;
    align-items:center;

    &:hover {
        cursor:pointer;
    }
`

export const CurrencySelectorItem = styled.div`
    margin:0 3px;
    font-size: 18px;
    font-weight:500;
    font-size:18px;
    display:flex;

    ${props => {
        if(props.rotate){
            return `
                transform:rotate(180deg);
            `
        }
    }}
    
`

export const CartProductsQuantity = styled.div`
    width:20px;
    height:20px;
    background-color:black;
    border-radius:50%;
    position:absolute;
    top:-7px;
    right:-5px;
    color:white;
    font-family:'Roboto';
    display:flex;
    justify-content:center;
    align-items:center;
`
