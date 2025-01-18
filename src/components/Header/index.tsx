
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Container, ContainerLabel, LabelCart, LabelLocale } from "./styles";


export function Header(){
  return(

    <Container>
       <img src="images/logo.png"/>

       <ContainerLabel>
        <LabelLocale>
          <MapPin size={22} color="#8047F8"/>
          <span>Salvador, BA</span>
        </LabelLocale>

        <LabelCart>
          <ShoppingCart color="#C47F17" size={22}/>
        </LabelCart>

       </ContainerLabel>
      
    </Container>
    
     
  

    

   
    
  )
}