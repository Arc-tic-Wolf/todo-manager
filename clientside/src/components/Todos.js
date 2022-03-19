import React,{ useState, useEffect } from 'react';

import './Todos.css';

import api from '../api/list';


const TodoList = () => {
    
    let [todos,setTodos] = useState([]);
    let [value, setValue] = useState("");
    
    
    
    useEffect(() => {
        getTodos();
    }, []);

    const addTodo =( text) => {
        let newTodo={"text":text, "completed": false};
        
        let newTodos = [...todos, newTodo];
        api.post("/update",newTodos);
        setTodos(newTodos);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        
        addTodo(value);
        setValue("");
    }

    const toggleTodo = index => {
        let newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        api.post("/update",newTodos);
        setTodos(newTodos);
    };

    async function getTodos() {
        let response = await api.get('/todos').catch(err=>console.log(err));
        console.log(response);
        setTodos(response.data);
        
    }
   
    
    
    
    return (
        <div className="todo-container">
                <div className="header">TODO - MANAGER</div>
                <div className="todos">
                    {todos.map((todo, index) => (
                        <div
                        className="todo"
                        style={{ textDecoration: todo.completed ? "line-through" : "" }}
                        >
                        {todo.text}
                        <button onClick={() => toggleTodo(index)}>{todo.completed?"Readd":"Complete"}</button>
                        </div>
                        
                    ))}
                </div>
                <div className="create-todo" >
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="input"
                            value={value}
                            placeholder="Add a new Todo"
                            onChange={e => setValue(e.target.value)}
                        />
                    </form>
                </div>
            </div>
    )
}
 
export default TodoList;