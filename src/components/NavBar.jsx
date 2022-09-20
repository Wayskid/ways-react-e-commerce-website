import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

export default function NavBar({ lightDark, handleChange, fontColorBlack, fontColorLight, cartItemsNum }) {
  return (
    <nav>
        <div className="lightAndDark">
          <FontAwesomeIcon icon={faSun} className="sun" />
          <div className="checkInput">
            <input
              type="checkbox"
              className="themeCheckbox"
              checked={lightDark}
              onChange={handleChange}
            />
            <div className="themeCheck"></div>
          </div>
          <FontAwesomeIcon icon={faMoon} className="moon" />
        </div>
        <h1 style={lightDark ? fontColorBlack : fontColorLight}>waysLAPTOPS</h1>
        <div className="rightSide">
          <FontAwesomeIcon icon={faBookmark} className="wishList" style={lightDark ? fontColorBlack : fontColorLight} />
          <FontAwesomeIcon icon={faCartShopping} className="cart" style={lightDark ? fontColorBlack : fontColorLight} />
          { cartItemsNum ? <h5 className="cartNum">{cartItemsNum}</h5> : <></>}
        </div>
    </nav>
  )
}
