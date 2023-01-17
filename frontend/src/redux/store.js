import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
  },
});

const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
