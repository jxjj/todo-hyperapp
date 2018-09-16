import { h } from 'hyperapp';
import TodoItem from './TodoItem';

export default ({ todos }) => (
  <ul class="todo-list">
    {todos.map(item => (
      <TodoItem key={item.id} todo={item} />
    ))}
  </ul>
);
