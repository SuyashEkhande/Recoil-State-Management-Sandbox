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
    },
    {
      title: "Go to Office",
      description: "Deployment Day",
    }
  ],
});


/**
 * Retrieves the list of todos from the 'todosAtom' state.
 * If a filter is applied, it returns the filtered list of todos 
 * whose titles include the filter string. Otherwise, it returns 
 * the full list of todos.
 *
 * @param {function} get - A function to access the Recoil state.
 * @returns {Array} An array of todo objects, filtered by title if a filter is present.
 */
export const todoFilterSelector = selector({
  key: "todoList",
  get: ({get}) => {
    const filter = get(todoFilterAtom);
    const todos = get(todosAtom);
    if (filter) {
      return todos.filter(todo => todo.title.includes(filter));
    }
    return todos;
  }
})