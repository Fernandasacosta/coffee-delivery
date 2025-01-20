
import styled from "styled-components";

export const Container = styled.div`
  min-width: 120rem;
  background-color: red;
  padding: 2rem 10rem;
  display:flex;
  gap:2rem;
`

export const ContainerOrder = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.75rem;
`

export const Adress = styled.div`
padding: 1rem 0;
background-color:#F3F2F2;
font-family: "Roboto";
padding: 2rem 30rem 13rem 2.5rem;


  span{
    padding-left:1.75rem;
  }

  div{
    display:flex;
    padding-top: 2.5rem;
    flex-direction:row;
    gap:0.25rem;
    align-items: center; 
  }

  form{
    display: grid;
    grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 1rem;
    padding: 2rem 0;
    
  }
  input {
    height: 2.625rem;
    background-color:#EDEDED;
    border:none;
    padding-left:1rem;
}
  input[name="cep"] {
            grid-area: cep;
        }
        input[name="street"] {
            grid-area: street;
        }
        input[name="number"] {
            grid-area: number;
        }
        input[name="fullAddress"] {
            grid-area: fullAddress;
        }
        input[name="neighborhood"] {
            grid-area: neighborhood;
        }
        input[name="city"] {
            grid-area: city;
        }
        input[name="state"] {
            grid-area: state;
        }
`

export const Payment = styled.div`
  padding: 1rem 2.5rem;
  background-color:#F3F2F2;
  font-family: "Roboto";

  span{
    padding-left:1.5rem;
  }

  div{
    display:flex;
    padding-top: 2.5rem;
    flex-direction:row;
    gap:0.25rem;
    align-items: center; 
  }
`
export const PaymentOptions = styled.div`
display: flex;
gap: 1rem; /* Espaço entre as opções */

input[type="radio"] {
  margin-right: 0.5rem;
}
`

export const ContainerConfirmation = styled.div`
  background-color:blue;
  padding-top:0.75rem;
  
`

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  align-content:center;
  justify-content:center;
  background-color:#E6E5E5;
  width: 11rem;
  height:3rem;
`

export const CardOrderReview = styled.div`
  padding: 0rem 8rem 6rem 2.5rem;
  background-color:#F3F2F2;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
 
  /* max-width:28rem; */
`

export const OrderCoffee = styled.div`

  padding-top:2.5rem;
  display:flex;
  gap:1rem;
  justify-content:space-between;
  background-color:green;
  width: 23rem;


img{
    width:4rem; 
    height:4rem;
  }
  div{
    background-color:pink;
  }

`
export const ReviewOrder = styled.div`
  display:flex;
  flex-direction:column;
  padding-top:10.5rem;
`

export const ButtonTrash = styled.div`

`