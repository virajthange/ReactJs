# React + Vite

#Learning Redux

Steps:

## Step 0: Install reduct & react-redux

## Step 1: Create store

import { createStore } from "redux";
const store = createStore(
);

## Step 2: Create provider
import { Provider } from "react-redux";
import store from "./redux/store";  
 <Provider store={store}>
<App />
</Provider>,

## Step 3: Create Reducer function

const initialState = {
products: []
}
const produceReducer = (state = initialState, action) => {
if(action.type == 'ADD_TO_PRODUCT') {
console.log("Add to product reducer");
return state;
}else {
return state;
}
}

## Step 4: Link Reducer function to store

const store = createStore(
productReducer
);
