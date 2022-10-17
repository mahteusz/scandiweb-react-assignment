import styled from "styled-components";

export const Container = styled.div`
    margin:80px 100px 200px;
`

export const CartTitle = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-transform:uppercase;
    margin-bottom: 55px;
`

export const ProductName = styled.span`
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    margin-bottom:20px;
`

export const ProductsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

export const ProductContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:24px;
    padding-bottom:32px;
    border-top: 2px solid #E5E5E5;
`

export const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const AttributeContainer = styled.div`
    display:flex;
`
export const AttributeText = styled.div`
    width:63px;
    height:45px;
    border:2px solid #1D1F22;
    margin-right: 6px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 16px;

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
    font-size: 18px;
    line-height: 18px;
`

export const AttributeSwatch = styled.div`
    width:32px;
    height:32px;
    margin-right:4px;
    margin-bottom: 16px;
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

export const ProductQuantityContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    margin-right: 42px;
`

export const ProductQuantityText = styled.span`
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
`

export const ProductQuantityButtonContainer = styled.div`
    width:45px;
    height:45px;
    border:2px solid #1D1F22;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:45px;
    font-weight:200;
    transition: all 0.5s ease;
    
    &:hover {
        cursor:pointer;
        background-color:black;
        color:white;
    }
`

export const ImageContainer = styled.div`
    display:flex;
    position:relative;
`

export const ProductImage = styled.img`
    width:200px;
    height:288px;
    object-fit:contain;
`

export const ArrowButtonsContainer = styled.div`
    display:flex;
    position:absolute;
    bottom:16px;
    right:16px;
`

export const ArrowButton = styled.div`
    width:25px;
    height:25px;
    background: rgba(0, 0, 0, 0.73);
    margin:0 4px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    cursor:pointer;
`

export const Arrow = styled.img`
    width:10px;
`

export const TotalContainer = styled.div`
    display:flex;
    border-top: 2px solid #E5E5E5;
    padding-top:32px;
`

export const TotalContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:10px;
    justify-content:center;
`

export const TotalContentInfo = styled.span`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`

export const TotalContentValues = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
`

export const OrderButton = styled.div`
    background-color:#5ECE7B;
    width:279px;
    padding:13px 0;
    display:flex;
    justify-content:center;
    color:white;
    text-transform:uppercase;
    margin-top:16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    cursor:pointer;
    transition:all 0.3s ease;

    &:hover {
        cursor:pointer; 
        transform:scale(1.05);
        background-color:white;
        outline:2px solid #5ECE7B;
        color:#5ECE7B;
    }
`

export const EmptyCartMessage = styled.span`
    font-size:25px;
`

