const DEFAULT_STATE = {
    userDetailsForm: {
        firstName: '',
        lastName: '',
        address: '',
        country: 'Germany'
    },
    settingsForm: {
        emailAddress: '',
        password: '',
        repeatPassword: ''
    },
    shownTab: 'myaccount'
};

const reducer = (state = DEFAULT_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case "UPDATE_USER_DETAILS_FORM":
            console.log(action.payload)
            return {
                ...state,
                userDetailsForm: action.payload
            }
        case "UPDATE_SETTINGS_FORM":
            return {
                ...state,
                settingsForm: action.payload
            }
        case "SWITCH_SHOWN_TAB":
            return {
                ...state,
                shownTab: action.payload
            }
        default: return state
    }
};

export default reducer;