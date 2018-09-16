import { h } from 'hyperapp';
import './NewTodoInput.css';

export default ({ placeholder }) => ({ newTodoInput }, { addTodo, updateNewTodoInput }) => (
  <form
    class="new-todo-input"
    onsubmit={(event) => {
      event.preventDefault();
      addTodo(newTodoInput);
      updateNewTodoInput('');
    }}
  >
    <input
      placeholder={placeholder}
      value={newTodoInput}
      oninput={(event) => {
        event.preventDefault();
        updateNewTodoInput(event.target.value);
      }}
    />
  </form>
);
