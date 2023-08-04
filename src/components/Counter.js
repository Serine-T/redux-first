import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, fetchTodos, increaseCount } from '../store/actions/couter'

const Counter = () => {
  const dispatch = useDispatch();
  const {count, data, isLoading} = useSelector((state)=> state.count);

  useEffect(() => {
     dispatch(fetchTodos())
  }, [])

  console.log('data', data)

  // console.log('store', store)
  const handleDecrease =() => {
    dispatch(decreaseCount(1));
  }

  const handleIncrease =() => {
    dispatch(increaseCount(1));
  }

  if(isLoading) {
    return <div>loading....</div>
  }

  return (
    <div>
      Counter

      <>

      {
        data?.map(({id, title})=> {
          return (<div key={id}>
          {title}
          
          
          </div>)
        })
      }
      </>

        <button onClick={handleDecrease}>-</button>
          {count}
         <button  onClick={handleIncrease}>+</button>


    </div>
  )
}

export default Counter