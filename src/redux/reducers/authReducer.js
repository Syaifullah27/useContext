const initialState = {
    name: "EsyehaX",
    isLogin: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogin: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                isLogin: action.payload
            }
        default:
            return state
    }
}

export { authReducer }