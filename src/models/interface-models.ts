export interface Todo {
    id: string, 
    description: string
}

export interface TodoFormProps {
    addTodo: (text: string) => void
}

export interface TodoListProps {
    todos: {id: string, description: string}[],
    deleteTodo: (id: string) => void
}