
import { Container, ContainerLabel, LabelCart, LabelLocale } from "./styles";

export function Header(){
  return(
    <Container>
       <img src="images/logo.png"/>

       <ContainerLabel>
        <LabelLocale>
          <img src="/images/map.png"/>
          <span>Salvador, BA</span>
        </LabelLocale>

        <LabelCart>
          <img src="/images/cart.png"/>
        </LabelCart>

       </ContainerLabel>
      
    </Container>
    
     
  

    

   
    
  )
}