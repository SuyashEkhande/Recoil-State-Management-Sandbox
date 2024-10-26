/*
  Create a todo application
   - 2 input boxes title and desc - store in atom
   - add button
   - todos => atom
   - filter input box -> store in atom
   - selector (current list of todos)
*/

import {
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";

import {
  todoInputTitleFieldAtom,
  todoInputDescFieldAtom,
  todoFilterSelector,
  todosAtom,
  todoFilterAtom
} from "./store/atoms/todos";
import { useEffect } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <TodoInputAndAdd />
        <TodoFilter />
        <TodoList />
      </RecoilRoot> 
    </>
  );
}

function TodoInputAndAdd() {
  const [title, setTitle] = useRecoilState(todoInputTitleFieldAtom);
  const [desc, setDesc] = useRecoilState(todoInputDescFieldAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const addTodo = () => {
    if (title && desc) {
      const newTodo = { title, description: desc };
      setTodos([...todos, newTodo]); // Add new todo to the list
      setTitle(""); // Reset title input
      setDesc("");  // Reset description input
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
  const currentTodos = useRecoilValue(todoFilterSelector);

  return <div>
    <h1>Todo List</h1>
    <hr />
      <ul>
      {currentTodos.map((todo, index) => (
        <li key={index}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </li>
      ))}
    </ul>
    </div>;
}

export default App;
