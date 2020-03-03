import React from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends React.Component{
  state ={
    todos:[
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with family',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  //Toggle complete
  markComplete = (id) =>{
    //todos:  is able to change the initial value
    this.setState({ todos: this.state.todos.map(todo=>{
      if(todo.id === id){
        //toggle option, not setting a fixed value
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

      //Delete Todo
      delTodo = (id) =>{
        // console.log(id)
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
      }

      //Add Todo
      addTodo = (title) =>{
        console.log(title)
      }

  render(){
    // console.log(this.state.todos)
    

    return(
      <div className="App">
        <div className="container">
          <Header  />
          <AddTodo addTodo ={this.addTodo} />
          <Todos todos={this.state.todos}   markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}
export default App;
