import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

//export default
export default store;
