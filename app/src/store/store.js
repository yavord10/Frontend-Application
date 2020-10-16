const DEFAULT_STATE = {
    userDetailsForm: {}
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case "UPDATE_USER_DETAILS_FORM":
            return {
                ...state,
                userDetailsForm: action.payload
            }
        default: return state
    }
};

export default reducer;