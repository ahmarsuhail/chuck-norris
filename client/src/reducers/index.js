const categoryReducer = (state = {category: null}, action ) => {
    switch(action.type) {
        case 'UPDATE_CATEGORY':
            return {...state, category: action.category};
        default:
            return state;    
    }
}

export default categoryReducer;