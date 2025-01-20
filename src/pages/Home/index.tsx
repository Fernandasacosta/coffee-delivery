import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {  CoffeeInformation, Container, ContainerInformation, ContainerMenu, Description, IconBaseText, IconPurple, IconYellow, IconYellowDark, Spam, Title } from "./styles";
import { Card } from "../../components/Card";
import { coffees } from '../../data.json'

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

      <div>
      {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
      </div>


    </ContainerMenu>

  </>
  )
}