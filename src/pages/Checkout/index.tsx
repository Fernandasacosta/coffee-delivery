import { CurrencyDollar, MapPin, Trash } from "@phosphor-icons/react";
import { Adress, ButtonTrash, CardOrderReview, Container, ContainerConfirmation, ContainerOrder, OrderCoffee, Payment, PaymentOption, PaymentOptions, ReviewOrder } from "./styles";
import { InputQuantity } from "../../components/Card/styles";

export function Checkout(){
  return(

    <>
      <Container>
        <ContainerOrder>
          <h1>Complete seu pedido</h1>

          <Adress>
            <div>
              <MapPin size={22} color="#C47F17"/>
              <h3>Endereço da Entrega</h3>
            </div>
              <span>Informe o endereço onde deseja receber seu pedido</span>

              <form>
                <input type="text" name="cep" placeholder="CEP" />
                <input type="text" name="street" placeholder="Rua" />
                <input type="text" name="number" placeholder="Número" />
                <input type="text" name="fullAddress" placeholder="Complemento" />
                <input type="text" name="neighborhood" placeholder="Bairro" />
                <input type="text" name="city" placeholder="Cidade" />
                <input type="text" name="state" placeholder="UF" />
              </form>
           
           
          </Adress>

          <Payment>
            <div>
              <CurrencyDollar color="#8047F8" size={22}/>
              <h3>Pagamento</h3>
            </div>
            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>

              <PaymentOptions>
                <PaymentOption>
                  <input type="radio" name="payment" value="dinheiro" />
                  <label>Dinheiro</label>
                </PaymentOption>
                <PaymentOption>
                  <input type="radio" name="payment" value="debito" />
                  <label>Débito</label>
                </PaymentOption>
                <PaymentOption>
                  <input type="radio" name="payment" value="credito" />
                  <label>Crédito</label>
                </PaymentOption>
              </PaymentOptions>
          </Payment>
        </ContainerOrder>

        <ContainerConfirmation>
          <h1>Cafés Selecionados</h1>

          <CardOrderReview>
            <OrderCoffee>
            <img  src="/images/expresso.png"/>
            <div>
              <h3>Expresso Tradicional</h3>
                <InputQuantity>
                  <button /*onClick={decrement}*/>-</button>
                  <input type="number"  /*value={count} readOnly*/ />
                  <button /*onClick={increment}*/>+</button>
                  </InputQuantity>
                <ButtonTrash>
                  <Trash/>
                  <span>Remover</span>
                </ButtonTrash>                         
            </div>
            <span>R$ 9,90</span> 
            </OrderCoffee>
            
            <ReviewOrder>
              <span>Total de itens</span>
              <span>Entrega</span>
              <h2>Total</h2>

              
            </ReviewOrder>

            <button>CONFIRMAR PEDIDO</button>
              
          </CardOrderReview>

        </ContainerConfirmation>
      </Container> 
    </>
   
  )
}