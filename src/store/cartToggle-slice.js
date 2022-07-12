import { createSlice } from "@reduxjs/toolkit"

const cartShowSlice = createSlice({
  name: "cartToggle",
  initialState: { showCart: false },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart
    },
  },
})

export const cartToggleActions = cartShowSlice.actions

export default cartShowSlice.reducer
