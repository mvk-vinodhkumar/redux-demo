import ProductItem from "./ProductItem"
import classes from "./Products.module.css"

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Casual Shoes",
    price: 999,
    description: "Casual trendy fashion sneaker shoes for men.",
    imageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/l4k7ssw0/shoe/2/x/w/9-casual-sneaker-shoes-and-party-wear-shoes-casuals-for-men-kwik-original-imagffqduz29dcpq.jpeg?q=50",
  },
  {
    id: "p2",
    title: "Hand Bag",
    price: 749,
    description: "White shoulder hand bag for women - extra spacious",
    imageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/kql8sy80/hand-messenger-bag/l/i/j/women-grey-shoulder-bag-hand-bag-vanity-bag-blz01-hand-held-bag-original-imag4ktcgzmxdkzs.jpeg?q=50",
  },
  {
    id: "p3",
    title: "Wrist Watch",
    price: 2499,
    description: "Analog Watch - For Men",
    imageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/ktyp8cw0/watch/v/8/m/a1910-ltp-b110m-1avdf-casio-women-original-imag774tprawrgnv.jpeg?q=50",
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Add your Favourite Products to Cart</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Products
