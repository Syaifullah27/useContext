// import { combineReducers } from "redux";
import { createStore } from "redux";

import { reducers } from "./reducers"

// data nya || state
// const authState = {
//     data: {
//         name: "EsyehaX",
//         isLogin: true
//     },
// }

// const menuState = {
//     data: {
//         data: [
//             {
//                 id:1,
//                 name: "rawon",
//                 price: 200,
//             },
//             {
//                 id:2,
//                 name: "ketoprak",
//                 price: 400,
//             },
//         ],
//     },
// };

// reducer
// const authReducer = (state = authState) => {
//     return state
// }

// const menuReducer = (state = menuState) => {
//     return state
// }


// create store
const store = createStore(reducers)


export default store

