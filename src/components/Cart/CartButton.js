import { useSelector, useDispatch } from "react-redux"
import classes from "./CartButton.module.css"
import { cartToggleActions } from "../../store/cartToggle-slice"

const CartButton = (props) => {
  const totalCartItems = useSelector(
    (state) => state.cartOperations.totalQuantity
  )
  const dispatchFn = useDispatch()

  const showCartHandler = () => {
    dispatchFn(cartToggleActions.toggleCart())
  }

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  )
}

export default CartButton
