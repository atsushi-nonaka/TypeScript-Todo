import React from 'react';
import { TodoListProps } from '../models/interface-models';

const TodoList: React.FC<TodoListProps> = props => {
    console.log(props)
    return (
        <div>
            <ul>
                {props.todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            {todo.description}
                            <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default TodoList;