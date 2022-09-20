import Data from "../data"
import Card from "./Card"

export default function Items({ fontColorBlack, fontColorLight, lightDark, handleAddToCart }) {

    const itemsMapped = Data.map((el, index) =>{
        return <Card 
                    key={index}
                    id={el.id}
                    el= {el}
                    fontColorBlack= {fontColorBlack}
                    fontColorLight= {fontColorLight} 
                    lightDark= {lightDark} 
                    handleAddToCart= {handleAddToCart} 
                />
    })



  return (
    <section>{itemsMapped}</section>
  )
}
