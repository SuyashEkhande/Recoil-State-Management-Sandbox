import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { todoInputTitleFieldAtom, todoInputDescFieldAtom, todoFilterSelector, todosAtom, todoFilterAtom } from "./store/atoms/todos";
import { useCallback } from "react";

function App() {
  return (
    <RecoilRoot>
      <TodoInputAndAdd />
      <TodoFilter />
      <TodoList />
    </RecoilRoot>
  );
}

function TodoInputAndAdd() {
  const [title, setTitle] = useRecoilState(todoInputTitleFieldAtom);
  const [desc, setDesc] = useRecoilState(todoInputDescFieldAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const addTodo = () => {
    if (title && desc) {
      const newTodo = { title, description: desc, status: "pending" };
      setTodos((prevTodos) => [...prevTodos, newTodo]); // Use functional update
      setTitle("");
      setDesc("");
    } else {
      alert("Both Title and Description are required!");
    }
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <hr />
      <input
        type="text"
        placeholder="Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Todo Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <hr />
    </div>
  );
}

function TodoFilter() {
  const [filter, setFilter] = useRecoilState(todoFilterAtom);

  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="Search Todos..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const currentTodos = useRecoilValue(todoFilterSelector);

  const toggleStatus = useCallback((index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          status: todo.status === "pending" ? "completed" : "pending",
        };
      }
      return todo;
    });
  
    setTodos(updatedTodos);
  }, [todos, setTodos]);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <ul>
        {currentTodos.map((todo, index) => (
          <li key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => toggleStatus(index)}>
              {todo.status === "pending" ? "Mark as Done" : "Mark as Pending"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
