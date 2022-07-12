import { useDispatch } from "react-redux"
import { cartOperationsActions } from "../../store/cartOperations-slice"
import classes from "./CartItem.module.css"

const CartItem = (props) => {
  const dispathFn = useDispatch()

  const { id, title, quantity, total, price } = props.item

  const decreaseCartItemHandler = () => {
    dispathFn(cartOperationsActions.removeItem(id))
  }

  const increaseCartItemHandler = () => {
    dispathFn(cartOperationsActions.addItem(props.item))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {`\u20B9`}
          {total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            ({`\u20B9`}
            {price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseCartItemHandler}>-</button>
          <button onClick={increaseCartItemHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
