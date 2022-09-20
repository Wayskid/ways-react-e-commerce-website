import { useState } from "react";
import Items from "./components/Items";
import NavBar from "./components/NavBar";

export default function App() {

  const [ lightDark, setLightDark ] = useState(false)
  const [ cartItemsNum, setcartItemsNum ] = useState(0)

  function handleChange() {
    setLightDark(!lightDark)
  }

  const backgroundBlack = {
    backgroundColor: "#03071e"
  }

  const backgroundLight = {
    backgroundColor: "#f7e6d7"
  }

  const fontColorBlack = {
    color: "#03071e"
  }

  const fontColorLight = {
    color: "#f1f2f2"
  }

  //Add To Cart

  function handleAddToCart(year, screen, item, price) {
    console.log(item, screen, year, price);
    setcartItemsNum(prevNum=> prevNum + 1)
  }

  



  return (
    <div className="containerBody" style={lightDark ? backgroundBlack : backgroundLight}>
        <NavBar 
          lightDark= {lightDark}
          handleChange= {handleChange}
          fontColorBlack= {fontColorBlack}
          fontColorLight= {fontColorLight}
          cartItemsNum= {cartItemsNum}
        />
        <Items
          fontColorBlack= {fontColorBlack}
          fontColorLight= {fontColorLight} 
          lightDark= {lightDark} 
          handleAddToCart= {handleAddToCart} 
        />
    </div>
  );
}
