import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeeCard, CoffeeList, CoffeePrice, InputQuantity } from "./styles";


type Props = {
  coffee: {
    id: string
    title: string
    description: string
    price: number
    image: string
  }
}

export function Card({ coffee }: Props){
  return(
       <CoffeeList>
            <CoffeeCard>
              <img src={coffee.image}/>
              <h1>{coffee.title}</h1>
              <h2>{coffee.description}</h2>
    
              <CoffeePrice>
                <h5>{coffee.price}</h5> 
    
                <InputQuantity>
                  <button /*onClick={decrement}*/>-</button>
                  <input type="number"  /*value={count} readOnly*/ />
                  <button /*onClick={increment}*/>+</button>
                </InputQuantity>
                
                <button>  
                  <ShoppingCart color="white" size={22}/> 
                </button>   
              </CoffeePrice>
              
            </CoffeeCard>
          </CoffeeList>
  )
}