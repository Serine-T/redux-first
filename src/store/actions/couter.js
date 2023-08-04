import { sleep } from "../../helpers";

// ACTION CREATOR
export const increaseCount = (payload) => {
    return {
        type: 'INCREASE_COUNT',
        payload,
    }
}

export  const decreaseCount = (payload) => {
    return {
        type: 'DECREASE_COUNT',
        payload,
    }
};

export  const setIsLoading = (payload) => {
    return {
        type: 'SET_LOADING',
        payload,
    }
};

export  const setData = (payload) => {
    return {
        type: 'SET_DATA',
        payload,
    }
};

export  const setErrors = (payload) => {
    return {
        type: 'SET_ERRORS',
        payload,
    }
};

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async(dispatch) => {
        try {

            await sleep(4000)
            dispatch(setIsLoading(true))
           const response = await fetch(url);
           const data = await response.json();
           console.log('data----', data)
             dispatch(setData(data))

        }catch(e) {
            console.log('e',e )
        }finally {
            dispatch(setIsLoading(false))
        }
    }
}