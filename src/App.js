import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { notificationActions } from "./store/notification-slice"
import { cartOperationsActions } from "./store/cartOperations-slice"

import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import Notification from "./components/UI/Notification"

let isInitial = true //fot not to exceute the fetch() for emtpy cart state
function App() {
  const showCart = useSelector((state) => state.cartToggle.showCart)
  const showNotification = useSelector(
    (state) => state.notifications.notification
  )
  const dispatchFn = useDispatch()
  const [showNotificationDiv, setShowNotificationDiv] = useState(true) //to hide the notifications div afetr 5s

  //cart contents slice
  const cartState = useSelector((state) => state.cartOperations)

  //GET request - to retain cart items on page referesh
  useEffect(() => {
    const fetchCartInfo = async () => {
      const response = await fetch(
        "https://react-http-88862-default-rtdb.firebaseio.com/cartInfo.json"
      )

      if (!response.ok) {
        throw new Error("Something went wrong!")
      }

      const responseData = await response.json()
      console.log(responseData)

      dispatchFn(
        cartOperationsActions.replaceCartItems({
          items: responseData.items || [],
          totalQuantity: responseData.totalQuantity,
          totalAmount: responseData.totalAmount,
        })
      )
    }

    fetchCartInfo().catch((error) => {
      dispatchFn(
        notificationActions.showNotification({
          status: "error",
          title: "Error",
          message: error,
        })
      )
    })
  }, [dispatchFn])

  //PUT request - to save cart info
  useEffect(() => {
    const sendCartInfo = async () => {
      dispatchFn(
        notificationActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart info to database...",
        })
      )

      const response = await fetch(
        "https://react-http-88862-default-rtdb.firebaseio.com/cartInfo.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartState.items,
            totalQuantity: cartState.totalQuantity,
            totalAmount: cartState.totalAmount,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (!response.ok) {
        throw new Error("Http request falied!")
      }

      dispatchFn(
        notificationActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart info was updated successfully!",
        })
      )
    }

    if (isInitial) {
      isInitial = false
      return
    }
    //only if the cart is changed, send PUT request
    if (cartState.isChanged) {
      sendCartInfo().catch((error) => {
        dispatchFn(
          notificationActions.showNotification({
            status: "error",
            title: "Error",
            message: error,
          })
        )
      })
    }

    //to hide notification ofter 5seconds
    const identifier = setTimeout(() => {
      setShowNotificationDiv(false)
    }, 5000)
    setShowNotificationDiv(true)

    //cleanup function
    return () => {
      clearTimeout(identifier)
    }
  }, [cartState, dispatchFn])

  return (
    <>
      {showNotification && showNotificationDiv && (
        <Notification
          status={showNotification.status}
          title={showNotification.title}
          message={showNotification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
