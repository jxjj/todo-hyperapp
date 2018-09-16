import { h } from 'hyperapp';
import cc from 'classcat';
import preventDefault from '../helpers/preventDefault';

import './TodoItem.css';

export default ({ todo }) => (state, { removeTodo, toggleCompleted }) => {
  const {
    id, editing, completed, text,
  } = todo;
  return (
    <li class={cc(['todo-item', { editing, completed }])}>
      <label onclick={preventDefault(() => toggleCompleted(id))}>
        <input type="checkbox" checked={completed} />
        {text}
      </label>
      <button class="btn-delete" onclick={preventDefault(() => removeTodo(id))}>
        &times;
      </button>
    </li>
  );
};
