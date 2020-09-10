export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
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
        default:
            return state;
    }

}

export default reducer;