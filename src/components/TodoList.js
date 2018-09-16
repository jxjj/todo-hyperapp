import { h } from 'hyperapp';
import * as CONSTANTS from '../constants';
import TodoItem from './TodoItem';

const getVisibleTodos = ({ todos, filter }) => {
  switch (filter) {
    case CONSTANTS.SHOW_ALL:
      return todos;
    case CONSTANTS.SHOW_COMPLETED:
      return todos.filter(item => !!item.completed);
    case CONSTANTS.SHOW_ACTIVE:
      return todos.filter(item => !item.completed);
    default:
      return todos;
  }
};

export default () => ({ todos, filter }) => (
  <ul class="todo-list">
    {getVisibleTodos({ todos, filter }).map(item => (
      <TodoItem key={item.id} todo={item} />
    ))}
  </ul>
);
