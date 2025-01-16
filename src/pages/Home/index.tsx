import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeCard, CoffeeInformation, CoffeeList, CoffeePrice, Container, ContainerInformation, ContainerMenu, Description, IconBaseText, IconPurple, IconYellow, IconYellowDark, InputQuantity, Spam, Title } from "./styles";

export function Home(){
  return(
    <>
    <Container>

      <ContainerInformation>
        <Title>
          Encontre o café perfeito<br />para qualquer hora do dia
        </Title>


        <Description>
          Com a Coffee Delivery voce recebe seu cafe onde estiver, a <br />qualquer hora
        </Description>
        
        <CoffeeInformation>
           <IconYellowDark>
           <ShoppingCart/>
           </IconYellowDark>
          <Spam>Compra simples e segura</Spam>
          <IconBaseText>
          <Timer/>
          </IconBaseText>
          <Spam>Embalagem mantém o café intacto</Spam>
          <IconYellow>
          <Package/>
          </IconYellow>
          <Spam>Entrega rápida e rastreada</Spam>
          <IconPurple>
          <Coffee/>
          </IconPurple>
          <Spam>O café che fresquinho até voce</Spam>
        </CoffeeInformation>
      </ContainerInformation>

      <img src="/images/logo-coffee.png"/>
      

    </Container>

    <ContainerMenu>

      <h2>
        Nossos cafés
      </h2>

      <CoffeeList>
        <CoffeeCard>
          <img src="/images/expresso.png"/>
          <h1>Expresso Tradicional</h1>
          <h2>O tradicional café feito com água quente e grãos moídos</h2>

          <CoffeePrice>
            <h5>R$ 9,90</h5> 

            <InputQuantity>
              <button /*onClick={decrement}*/>-</button>
              <input type="number"  /*value={count} readOnly*/ />
              <button /*onClick={increment}*/>+</button>
            </InputQuantity>
            
            <button>  
              <ShoppingCart 
              color="white" 
              size={22}/> 
            </button>   
          </CoffeePrice>
          
        </CoffeeCard>


      </CoffeeList>


    </ContainerMenu>

  </>
  )
}