import { combineReducers } from "redux";
import { counterReducer } from "./reducer/counter";

const allReducers = combineReducers({
    count: counterReducer,
})

export default allReducers