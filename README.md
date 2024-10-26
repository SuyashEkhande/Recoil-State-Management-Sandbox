# Recoil State Management: Task Manager

This todo application is a simple project designed to demonstrate the **basics of Recoil** for state management in React. It focuses on how to use **atoms** to store and manage state, **selectors** to filter data, and **hooks like `useRecoilState` and `useRecoilValue`** to interact with the Recoil state. The goal is to provide a practical introduction to Recoil, helping developers understand its core concepts through a hands-on example.


This app allows users to:
1. **Add todos** (title & description).
2. **Filter** todos by title.
3. **View the todo list** and interact with Recoil state.

---

## Components

### 1. `TodoInputAndAdd`
- Two input fields: **Title** & **Description** (stored in atoms).  
- **Add Todo button**: Adds a new todo to the list (managed by `todosAtom`).
- Resets inputs after adding.

### 2. `TodoFilter`
- Input to filter todos (stored in `todoFilterAtom`).
- Triggers filtering using **`todoFilterSelector`**.

### 3. `TodoList`
- Displays the **filtered list** of todos.
- Uses **`useRecoilValue`** to retrieve the filtered state.

---

## Atoms & Selector (State Management)

- **`todoInputTitleFieldAtom`**: Stores the title input value.  
- **`todoInputDescFieldAtom`**: Stores the description input value.  
- **`todosAtom`**: Stores the list of todos (with default todos).  
- **`todoFilterAtom`**: Stores the current filter value.  
- **`todoFilterSelector`**: Filters todos based on the title input.

---

## How it Works

1. **Add Todo**: Fill the inputs and click **Add Todo** to append it to the list.  
2. **Filter Todos**: Type in the filter input to display matching todos by title.

---

This structure provides a **clean and efficient setup** using Recoil for state management, making it easy to handle **input, list, and filtering logic**.
