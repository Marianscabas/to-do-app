import React from 'react'
import FiltersTodo from "./FiltersTodo"


const TodoList = ({children}) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl '>
     {children}
     {/* <FiltersTodo/> */}
    </div>
  )
}

export default TodoList
