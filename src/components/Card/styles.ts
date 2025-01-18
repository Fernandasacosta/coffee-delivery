
import styled from "styled-components"

export const CoffeeList = styled.div`
 padding: 3.375rem 0;
 display: flex;
 flex-direction: row;
flex-wrap: wrap;
`


export const CoffeeCard = styled.div`
  width: 16rem;
  /* height: 20rem; */
  background-color: #F3F2F2;
  border-radius: 3% 15%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap:2rem;
  
  h1{
    font-size: 1.25rem;
  }

  h2{
    text-align:center;
    font-size: 0.875rem;
    padding: 0 1.5rem; 
  }
`

export const CoffeePrice = styled.div`

  width:13rem;
  height:2.375rem;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h5{
    font-size: 1.5rem;
  }

button {
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 10px;
  background-color: #4B2995;
  border: none;
}

button:hover {
  color: inherit;
}
`

export const InputQuantity = styled.div`
  display:flex;
  flex-direction: row;
  width: 4.5rem;
  height: 2.375rem;
  background-color:#E6E5E5;
  align-items: center;
  justify-content: center;

  input{
  width: 0.875rem;
  height: 0.875rem;  
  }

button{
  width: 0.875rem;
  height: 0.875rem;
  background-color:#E6E5E5;
}
`

