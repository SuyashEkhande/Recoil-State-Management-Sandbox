import { atom, selector } from "recoil";

export const todoInputTitleFieldAtom = atom({
  key: "todoInputField",
  default: "",
});

export const todoInputDescFieldAtom = atom({
  key: "todoInputDescField",
  default: "",
});

export const todoFilterAtom = atom({
  key: "todoFilter",
  default: "",
});

export const todosAtom = atom({
  key: "todos",
  default: [
    {
      title: "Go to GYM",
      description: "Pull Push legs Day",
      status: "pending",
    },
    {
      title: "Go to Office",
      description: "Deployment Day",
      status: "pending",
    },
  ],
});

// Selector for filtering todos based on the search input
export const todoFilterSelector = selector({
  key: "todoList",
  get: ({ get }) => {
    const filter = get(todoFilterAtom);
    const todos = get(todosAtom);
    if (filter) {
      return todos.filter((todo) => todo.title.toLowerCase().includes(filter.toLowerCase())); // Case insensitive filter
    }
    return todos;
  },
});