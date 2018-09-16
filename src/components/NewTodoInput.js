import { h } from 'hyperapp';

export default ({ placeholder }) => ({ newTodoInput }, { addTodo, updateNewTodoInput }) => (
  <form
    class="new-todo input-group"
    onsubmit={(event) => {
      event.preventDefault();
      addTodo(newTodoInput);
      updateNewTodoInput('');
    }}
  >
    <input
      id="new-todo"
      placeholder={placeholder}
      value={newTodoInput}
      oninput={(event) => {
        event.preventDefault();
        updateNewTodoInput(event.target.value);
      }}
    />
  </form>
);
