import { combineReducers } from "redux";
import todoReducer from "../features/todo";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer
