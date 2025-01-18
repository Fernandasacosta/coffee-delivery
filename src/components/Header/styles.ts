import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  /* min-width: 90rem;
  min-height:6.5rem; */
  align-items: center;
  padding: 2rem 10rem;
  font-family: Roboto;

    img{
      width: 5.313rem;  
      height: 2.5rem;     
    }
 `

export const LabelLocale = styled.div`
  width: 143px;
  height: 38px; 
  background-color: #EBE5F9;
  color: #8047f8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const ContainerLabel = styled.div`
  display:flex;
  flex-direction: row;
  gap: 1rem;
`

export const LabelCart = styled.div`
  width: 38px;
  height: 38px;
  background-color:#F1E9C9;
  border-radius: 6px;
  display: flex;
  align-items: center;   
  justify-content: center; 
`