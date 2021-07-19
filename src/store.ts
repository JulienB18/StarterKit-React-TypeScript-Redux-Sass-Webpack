import { createStore } from "redux";
import globalReducer from "./reducer/globalReducer";

const store = createStore(globalReducer);

export default store;
