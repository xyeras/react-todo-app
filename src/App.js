import { useState } from 'react';

import TodoForm from './TodoForm';
import SuccessAlert from './SuccessAlert'
import TodoList from './TodoList';

import './App.css';

let todoList = [
  {
    id: 193679392029,
    name: "Fight a dragon",
    description: "A dragon has been terrorizing Xenon, a local city at the far west of the continent. We need the dragon gone for good. Reward - 100,000 XP & 100,000 Gold",
    difficulty: "Very Hard"
  },
  {
    id: 239384733930,
    name: "Collect 15 nightshades",
    description: "I'm trying to concoct my very own poision, but I need to collect nightshades. These plants can by found in Denvale. Reward - 1,000 XP & 1,000 Gold",
    difficulty: "Easy"
  },
  {
    id: 389300383807,
    name: "Escort and bodyguard Prince of Camelot",
    description: "The original person assigned to the job has been killed. We need someone to take his place. Reward - 10,000 XP & 10,000 Gold",
    difficulty: "Hard"
  }
];

const App = () => {

  const [todos, setTodos] = useState(todoList);
  const [todo, setTodo] = useState({
    id: '',
    name: '',
    description: ''
  });

  const [success, setSuccess] = useState(false);

  const saveTodo = () => {

    if (todo.id) {
      console.log(`The task has an id, the name is ${todo.name}`);

      let updatedTodos = todos.filter(t => t.id !== todo.id);
      updatedTodos.push(todo);
      setTodos(updatedTodos);

      setSuccess(true);
      setTimeout(() => {
      setSuccess(false);
      }, 3000);

    } else {
      todo.id = Date.now();
      setTodos([...todos, todo]);

      setSuccess(true);
      setTimeout(() => {
      setSuccess(false);
      }, 3000);
    }

    setTodo({
      id: '',
      name: '',
      description: '',
    });

  };

  const removeTodo = todoId => {
    if (window.confirm('Did you complete this quest?')) {
      let newTodos = todos.filter(t => t.id !== todoId);
      console.log(newTodos);
      setTodos(newTodos);
    }
  };

  return (
    <div className='container'>

      <h1 className="display-4 text-center my-5">Adventurer's Quest List</h1>
      
      <div className="row my-5">

      <div className="col my-5">
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          saveTodo={saveTodo}
        />

        <SuccessAlert
          success={success}
        />
      </div>

      <div className="col">
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          setTodo={setTodo}
        />
      </div>

      </div>

    </div>
  );
};

export default App;
