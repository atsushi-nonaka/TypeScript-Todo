import { stringify } from 'querystring';
import React, { useState } from 'react';
import { uuid } from 'uuidv4';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './models/interface-models';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (description: string) => {
    setTodos([...todos, {
      id: uuid(), description
    }]);
  }

  const editTodo = ({ id , description }: Todo) => {
    const remainedTodos = todos.filter(todo => todo.id !== id);
    let todo = todos.find(todo => id === todo.id );
    todo!.description = description;
    const newTodos = [todo, ...remainedTodos] as Todo[];
    setTodos(newTodos)
  }

  const deleteTodo = (id: string) => {
    const remainedTodos = todos.filter(todo => todo.id !== id);
    setTodos(remainedTodos);
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App;
