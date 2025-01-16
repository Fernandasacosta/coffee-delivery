import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  height: 34rem;
  display: flex;
  flex-direction: row;
  padding: 6.25rem 0;
  margin-top: 3rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Syne', serif;
`;

export const Description = styled.span`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
`;

export const ContainerInformation = styled.div`
  max-height: 34rem;
  width: 120rem;
  flex-direction: column;
  display:flex;
  gap:3rem;
`;

export const CoffeeInformation = styled.div`
  width: 35rem;
  height: 5.25rem;
  font-size: 1rem;
  display:flex;
  flex-wrap:wrap;
  align-items: center; 
  gap:1rem;  
`;

const BaseIcon = styled.article`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconYellowDark = styled(BaseIcon)`
  background-color: #C47F17;
`;

export const IconBaseText = styled(BaseIcon)`
  background-color: #574F4D;
`;

export const IconYellow = styled(BaseIcon)`
  background-color: #DBAC2C;
`;

export const IconPurple = styled(BaseIcon)`
  background-color: #8047f8;
`;

export const Spam = styled.h5`
  font-size: 0.95rem;
  font-family: 'Roboto', sans-serif;
  
`

export const ContainerMenu = styled.div`
  h2{
    font-size: 2rem;
  }


`
export const CoffeeList = styled.div`
 margin-top: 3rem;
 margin-bottom: 3rem;
`

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 20rem;
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