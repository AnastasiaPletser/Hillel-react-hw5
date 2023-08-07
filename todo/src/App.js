import { useState } from "react";
import Button from "./components/Button";
import EditForm from "./components/EditForm";
import Input from "./components/Input";
import Item from "./components/Item";
import "./styles.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [query, setQuery] = useState("");
  

  const handleCreateTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      checked: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((todos) => todos.filter((i) => i.id !== id));
  };

  const handleCheckTodo = (id) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked
        };
      }

      return todo;
    });

    setTodos(newArr);
    
  };

  const handleUpdateTodo = (updatedTodo) => {
    const newArr = todos.map((t) =>
      t.id === updatedTodo.id ? updatedTodo : t
    );

    setTodos(newArr);
    setIsEditing(false);
  };

  const enterEditMode = (todo) => {
    setEditedTodo(todo);
    setIsEditing(true);
  };

  return (
    <div>
      <div className="search">
        <Input value={query} onChange={setQuery} placeholder="Search..." />
      </div>

      <div className="create-todo">
        <Input value={title} onChange={setTitle} />
        <Button text="Create todo" onClick={handleCreateTodo} />
      </div>
      {isEditing && (
        <div>
          <EditForm onUpdate={handleUpdateTodo} editedTodo={editedTodo} />
        </div>
      )}
      <div>
        
        {todos.length > 0 &&
          todos
            .filter((i) => i.title.toLowerCase().includes(query.toLowerCase()))
            .map((i) => (
              <Item
                key={i.id}
                item={i}
                
                onDelete={handleDeleteTodo}
                onCheck={handleCheckTodo}
                onEdit={enterEditMode}
                onUpdate={handleUpdateTodo} editedTodo={editedTodo}
              />
              
            ))}
      </div>

    </div>
  );
}
