import { configureStore } from "@reduxjs/toolkit"
import cartShowReducer from "./cartToggle-slice"
import cartOperationsReducer from "./cartOperations-slice"
import notificationReducer from "./notification-slice"

const store = configureStore({
  reducer: {
    cartToggle: cartShowReducer,
    cartOperations: cartOperationsReducer,
    notifications: notificationReducer,
  },
})

export default store
