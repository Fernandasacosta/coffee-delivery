import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  /* height: 34rem; */
  display: flex;
  flex-direction: row;
  padding: 5rem 10rem;
  margin-top: 94px;
  background-image: url('/images/background.png');
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Baloo 2', serif;
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

  padding: 2rem 10rem;
  


  h2{

    font-size: 2rem;
  }


`