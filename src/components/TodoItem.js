import { h } from 'hyperapp';
import cc from 'classcat';

const preventDefault = fn => (event) => {
  event.preventDefault();
  fn();
};

export default ({ todo }) => (state, { toggleCompleted }) => {
  const {
    id, editing, completed, text,
  } = todo;
  return (
    <li class={cc(['todo-item', { editing, completed }])}>
      <label onclick={preventDefault(() => toggleCompleted(id))}>
        <input type="checkbox" checked={completed} />
        {text}
      </label>
      <button class="btn-delete">&times;</button>
    </li>
  );
};
