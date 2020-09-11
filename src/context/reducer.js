export const initialState = {
    basket: [],
    user: null,
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
    SET_USER: "SET_USER",
}

export const getBasketTotal = (basket) => {
    let total = 0;
    basket.map(item =>(
        total += item.price
    ))
    return total;
}


const reducer = (state, action) => {
    console.log('action', action);
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case actionTypes.REMOVE_FROM_BASKET: 
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id)
            let newBasket = [...state.basket];

            if(index >= 0) {
                newBasket.splice(index, 1)
            }else {
                console.error(`Can't remove product (id ${action.id})`)
            }
            return {
                ...state,
                basket: newBasket
            }   
            // return {
            //     ...state,
            //     basket: state.basket.filter(item => item.id !== action.id)
            // } 
            case actionTypes.SET_USER: 
             return {
                 ...state,
                 user: action.user
             }   
        default:
            return state;
    }

}

export default reducer;