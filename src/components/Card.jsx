import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

export default function Card({ el, handleAddToCart }) {

  const [ wish, setWish ] = useState(false)

  function handleWish() {
    setWish(prevWish=> !prevWish)
  }



  return (
    <div className="card" >
        <img src={el.image} className="itemImg" />
        <div className="details">
            <div className="nameInch">
                <h3 className="name">{el.name}</h3>
                <h3 className="name">{el.ReleaseYear}</h3>-<h4 className="inch">{el.screenSize}</h4>
            </div>
            <h2 className="price">{el.price}</h2>
            <p className="processor">{el.Processor}</p>
            <p className="storage">Storage: {el.Storage}</p>
            <p className="memory">Memory: {el.Memory}</p>
            <div className="buttons">
                <button 
                  className="addToCart"
                  onClick={()=> handleAddToCart(el.ReleaseYear, el.screenSize, el.name, el.price)}
                ><FontAwesomeIcon icon={faCartShopping} className="cardCart" /> Add to Cart</button>
                <button 
                  className="addToWishList"
                  onClick={handleWish}
                  style= {{backgroundColor: wish ? "gold" : "white"}}
                ><FontAwesomeIcon icon={faBookmark} className="wish" /> Add to Wishlist</button>
            </div>
        </div>
    </div>
  )
}
