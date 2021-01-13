import React from 'react';
import { TodoFormProps } from '../models/interface-models';

const TodoForm: React.FC<TodoFormProps> = props => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let data = document.querySelector('input')!;
        props.addTodo(data.value)
        data.value = '';
    }

    return(
        <form>
            <div>
                <label htmlFor="todo-item">TO DO</label>
                <input type="text" id="todo-item" />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default TodoForm