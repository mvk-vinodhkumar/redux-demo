import { useDispatch } from "react-redux"
import { cartOperationsActions } from "../../store/cartOperations-slice"
import Card from "../UI/Card"
import classes from "./ProductItem.module.css"

const ProductItem = (props) => {
  const dispatchFn = useDispatch()

  const { title, price, description, id, imageUrl } = props

  const addToCartHandler = () => {
    const newCartItem = {
      id: id,
      title: title,
      price: price,
    }

    dispatchFn(cartOperationsActions.addItem(newCartItem))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            {`\u20B9`}
            {price.toFixed(2)}
          </div>
        </header>
        <div className={classes.imgWrap}>
          <img src={imageUrl} alt="product image" />
        </div>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
