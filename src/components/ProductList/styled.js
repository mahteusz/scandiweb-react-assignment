import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    margin: 0 100px;
`

export const CategoryTitle = styled.h1`
    margin:80px 0;
    font-size:42px;
    font-weight:400;
    line-height: 160%;
    text-transform:capitalize;
`

export const ProductsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    row-gap:100px;
    margin-bottom:200px;
`

export const ProductCard = styled(Link)`
    display:flex;
    flex-direction:column;
    padding: 10px 15px;
    transition: all 0.5s ease;
    position:relative;
    color:black;
    text-decoration:none;

    &:active, &:focus, &:visited {
        color:inherit;
    }

    &:nth-child(3n-1) {
        margin:0 37px;
    }


    &:hover {
        cursor:pointer;
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19)
    }
`

export const ProductImage = styled.img`
    width:356px;
    height: 338px;
    object-fit:contain;
    margin-bottom:24px;
`

export const ProductName = styled.span`
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
`

export const ProductPrice = styled.span`
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
`

export const AddToCartButton = styled.button`
    height:52px;
    width:52px;
    position:absolute;
    background-color:#5ECE7B;
    border-radius:50%;
    bottom:72px;
    right:31px;
    border:0;
    transition: all 0.5s ease;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:1;

    &:hover {
        cursor:pointer;
        transform:scale(1.2);
    }
`

export const OutOfTheStockProductCard = styled.div`
    opacity:0.5;
    display:flex;
    flex-direction:column;
    padding: 10px 15px;
    position:relative;
    color:black;
    text-decoration:none;

    &:active, &:focus, &:visited {
        color:inherit;
    }

    &:nth-child(3n-1) {
        margin:0 37px;
    }
`

export const OutOfTheStockMessage = styled.div`
    position:absolute;
    left:50%;
    top:40%;
    transform: translateX(-50%);
    text-transform:uppercase;
    font-size: 24px;
    color:#8D8F9A;
`