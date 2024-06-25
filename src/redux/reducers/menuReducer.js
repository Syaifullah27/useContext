const initialState = {
    menu: []
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA_MENU":
            return {
                ...state,
                menu: action.payload
            }
        default:
            return state
    }
}

export { menuReducer }
