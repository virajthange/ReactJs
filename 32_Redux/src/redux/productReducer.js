const initialState = {
    products: [],
    count: 0
}

const produceReducer = (state = initialState, action) => {
    if(action.type == 'ADD_TO_PRODUCT') {
        console.log("Add to product reducer", action.payload);
        return {
            products: [...state.products, action.payload]
        };
    }else if(action.type == 'COUNT') {
        return {
            ...state, count: state.count + 1
        }
    }
    else {
        return state;
    }
}

export default produceReducer;

// action is a way to send data to reducer 