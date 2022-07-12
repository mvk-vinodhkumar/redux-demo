import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  isChanged: false,
} //isChanged state is maintained to check whether the items were incremented/decremented in the cart
const cartOperationsSlice = createSlice({
  name: "cartOperations",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.totalQuantity++
      state.isChanged = true

      const newItem = action.payload
      //vk-new
      state.totalAmount = state.totalAmount + newItem.price

      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price
      }
      // console.log(state.items)
    },
    removeItem(state, action) {
      state.totalQuantity--
      state.isChanged = true

      const eleID = action.payload
      const existingItem = state.items.find((item) => item.id === eleID)

      //vk-new
      state.totalAmount = state.totalAmount - existingItem.price

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== eleID)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
    //to replace fetched cart items when page is refreshed
    replaceCartItems(state, action) {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
      state.totalAmount = action.payload.totalAmount
    },
  },
})

export const cartOperationsActions = cartOperationsSlice.actions
export default cartOperationsSlice.reducer
