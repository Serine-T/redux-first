const initialValue = {
    isLoading: false,
    data: [],
    errors: null,
    count: 0,
};

export const counterReducer =(state= initialValue, action) => {
    if(action.type === 'INCREASE_COUNT') {
        return {...state, 
            count: state.count + action.payload};
    }

    if(action.type === 'DECREASE_COUNT') {
             return {...state, 
            count: state.count - action.payload};
    }

    if(action.type === 'SET_LOADING') {
        return        {
            ...state,
            isLoading: action.payload,
        };
    }

        if(action.type === 'SET_DATA') {
            console.log('*****aaa',action.payload)
        return {
            ...state,
            data: action.payload,
        };
    }
        if(action.type === 'SET_ERRORS') {
        return state.errors - action.payload;
    }

    return state;
}