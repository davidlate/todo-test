import './App.css';
import Todos from './components/Todos';
// import { useState } from 'react'
import React from 'react'
//29.26 of video at https://www.youtube.com/watch?v=sBws8MSXN7A

function App() {

const [todos] = React.useState([
  
      {
      id: 1,
      title: 'Take out the trash',
      completed: false,
      },

      {
      id: 2,
      title: 'Dinner with wife',
      completed: false,
      },

      {
      id: 3,
      title: 'Meeting with boss',
      completed: false,
      }
    ]);
    

console.log(todos)

  return (
    <div className="App">
     <Todos todos={todos} />
       
      </div>
  );
}



export default App;
