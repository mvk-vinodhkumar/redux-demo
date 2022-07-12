import React from "react"
import { useSelector } from "react-redux"
import Card from "../UI/Card"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"
import CartIcon from "../../assets/shopping-cart.png"

const Cart = () => {
  const cartItems = useSelector((state) => state.cartOperations.items)
  const cartTotal = useSelector((state) => state.cartOperations.totalAmount)

  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className={classes.emptyCart}>
            <div className={classes.imgWrap}>
              <img src={CartIcon} alt="empty cart icon" />
            </div>
            <p>Is empty!</p>
          </div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <div className={classes.cartTotal}>
            <span>Total&nbsp;&nbsp;&nbsp;</span>
            <span>
              {`\u20B9`}
              {cartTotal.toFixed(2)}/-
            </span>
          </div>
        )}
      </Card>
    </React.Fragment>
  )
}

export default Cart
