import React from "react";
import "./index.css"
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";








const App = () => {
  return (
   
      <div className="bg-gray-600 min-h-screen h-full text-gray-100 flex items-center py-10 px-5">
      <div className="container flex flex-col max-w-al">
          <Title/> 
          <TodoInput/>
           <TodoList>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
          </TodoList>
         
      </div>
   
      </div>
    
  );
};

export default App;
