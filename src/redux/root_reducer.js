import { count_reducer } from "./count_reducer";
import { combineReducers } from "redux";
import { comment_reducer } from "./comment_reducer";


export const rootReducer = combineReducers({
  count_reducer,
  comment_reducer

})