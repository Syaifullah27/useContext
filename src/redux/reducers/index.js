import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";

const reducers = combineReducers({
    authReducer,
    menuReducer
})

export { reducers }