import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    margin: 30px 100px;
`

export const GallerySelectorContainer = styled.div`
    margin-top:50px;
    margin-right:40px;
    display:flex;
    flex-direction:column;
    max-height:600px;
    width:110px;
    overflow-y:auto;
`

export const GalleryImage = styled.img`
    width:80px;
    height:80px;
    margin-bottom:32px;

    &:hover {
        cursor:pointer;
    }
`

export const MainImageContainer = styled.div`
    margin-top:50px;
    width:610px;
    height:510px;
`

export const MainImage = styled.img`
    width:100%;
    height:100%;
`

export const InfoDiv = styled.div`
    margin-top:50px;
    margin-left:100px;
    width:305px;
    display:flex;
    flex-direction:column;

`

export const ProductBrand = styled.h2`
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    margin-bottom:16px;
`

export const ProductName = styled.span`
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    margin-bottom:43px;
`

export const AttributeName = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    text-transform:uppercase;
    margin-bottom:8px;
`

export const AttributesItemsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-bottom:25px;
    row-gap:8px;
`

export const AttributeTextLabel = styled.label`
    width:63px;
    height:45px;
    border:2px solid #1D1F22;
    margin-right: 6px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.5s ease;
    
    &:hover {
        cursor: pointer;
    }

`

export const AttributeTextContent = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
`

export const AttributeTextRadioButton = styled.input`
    display:none;

    &:checked + ${AttributeTextLabel} {
        background-color:black;
        color:white;
    }
`

export const AttributeSwatchLabel = styled.label`
    width:32px;
    height:32px;
    margin-right:4px;
    display:flex;
    justify-content:center;
    align-items:center;


    ${props => {
        if(props.color === "#FFFFFF"){
            return `
                border:2px solid black;
            `
        } else if(props.color) {
            return `
                background-color:${props.color};
            `
        }
    }}

    &:hover {
        cursor: pointer;
    }
`

export const AttributeSwatchRadioButton = styled.input`
    display:none;

    &:checked + ${AttributeSwatchLabel} {
        border:1px solid #fff;
        outline: 2px solid #5ECE7B
    }
`

export const Price = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    margin-bottom:20px;
`

export const AddToCartButton = styled.button`
    width:292px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #5ECE7B;
    border: 0;
    padding:16px 0;
    color:white;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-transform:uppercase;
    transition: all 0.3s ease;
    margin-bottom:40px;

    ${props => {
        if(props.disabled) {
            return `
                opacity:0.4;
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
