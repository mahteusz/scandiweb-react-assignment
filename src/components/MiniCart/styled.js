import styled from "styled-components";
import { Link } from "react-router-dom";

export const Overlay = styled.div`
    position:fixed;
    margin-top:81px;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index:1;
    background: rgba(57, 55, 72, 0.22);
    height:100vh;
    width:100vw;
    cursor:auto;
`

export const CartContainer = styled.div`
    position:absolute;
    top:55px;
    right:-20px;
    z-index:10;
    padding:24px 20px;
    background-color:white;
    max-height:680px;
    min-width:340px;
    overflow-y:auto;
    cursor:auto;

    &::-webkit-scrollbar {
        width: 20px;
        border:2px solid #aaa;
    }

    &::-webkit-scrollbar-thumb {
        background: #5ECE7B;
    }
`

export const CartTitleContainer = styled.div`
    margin-bottom:24px;
    display:flex;
`

export const CartTitle = styled.h1`
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    text-transform:capitalize;
`

export const CartItemsNumber = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

`

export const ProductsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

export const ProductContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:40px;
`

export const ProductInfo = styled.span`
    font-weight: 300;
    width:130px;
    font-size: 16px;
    line-height: 160%;
`

export const ProductPrice = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    margin: 4px 0 8px;

`

export const AttributeName = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-transform:capitalize;
    margin-bottom:6px;
`

export const AttributeContainer = styled.div`
    display:flex;
    width:150px;
    flex-wrap:wrap;
`

export const AttributeText = styled.div`
    width:36px;
    height:24px;
    border:2px solid #1D1F22;
    margin-right: 6px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 8px;

    ${props => {
        if(props.selected) {
            return`
                background-color:black;
                color:white;
            `
        }
    }
}
`

export const AttributeTextContent = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`

export const AttributeSwatch = styled.div`
    width:16px;
    height:16px;
    margin-right:4px;
    margin-bottom: 8px;
    display:flex;
    justify-content:center;
    align-items:center;
    outline: ${props => props.selected ? '2px solid #5ECE7B' : ''};
    border: ${props => props.selected ? '1px solid #fff' : ''};
    background-color: ${props => props.color ? props.color : ''};
`

export const ProductImageContainer = styled.div`
    display:flex;
`

export const ProductImage = styled.img`
    width:121px;
    height:190px;
`

export const ImageContainer = styled.div`
    display:flex;
    position:relative;
`

export const ProductQuantityContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    margin-right:8px;
`

export const ProductQuantityText = styled.span`
    font-weight: 500;
    font-size: 16px;
`

export const ProductQuantityButtonContainer = styled.div`
    width:24px;
    height:24px;
    border:1px solid #1D1F22;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:25px;
    font-weight:200;
    transition: all 0.5s ease;
    
    &:hover {
        cursor:pointer;
        background-color:black;
        color:white;
    }
`

export const TotalContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:16px;
`

export const TotalContentInfo = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`

export const TotalContentValues = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
`

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:space-between;
`

export const ViewBagButton = styled(Link)`
    width:140px;
    border:2px solid;
    background-color:white;
    padding:13px 0;
    text-transform:uppercase;
    font-weight: 600;
    font-size: 14px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    cursor:pointer;
    transition:background-color 0.5s ease;

    &:visited, &:focus {
        color:inherit;
    }

    &:hover {
        background-color:black;
        color:white;
    }
`

export const CheckOutButton = styled.button`
    width:140px;
    border:none;
    background-color:#5ECE7B;
    padding:13px 0;
    color:white;
    text-transform:uppercase;
    font-weight: 600;
    font-size: 14px;
    cursor:pointer;
    transition:all 0.3s ease;

    ${props => {
        if(props.disabled) {
            return `
                opacity:0.4
            `
        }
        else {
            return `
                &:hover {
                    cursor:pointer; 
                    transform:scale(1.05);
                    background-color:white;
                    outline:2px solid #5ECE7B;
                    color:#5ECE7B;
                }
            `
        }
    }}
`

export const EmptyCartMessage = styled.div`
    font-size:20px;
    display:block;
    margin-bottom:24px;
`