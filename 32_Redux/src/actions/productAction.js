
export const addToProduct = (details) => {
    return {
        type: 'ADD_TO_PRODUCT',
        payload: details
    }
}

export const incrementCount = () => {
    return {
        type: 'COUNT'
    }
}