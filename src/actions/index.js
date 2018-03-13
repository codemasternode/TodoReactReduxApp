
export const add_todo = "ADD_TODO"

export function addTodo(todo) {
  console.log(todo);
  return {
    type: add_todo,
    payload: todo
  };
}
