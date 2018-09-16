import { h } from 'hyperapp';
import NewTodoInput from './NewTodoInput';
import TodoList from './TodoList';
import Filter from './Filter';
import * as CONSTANTS from '../constants';

export default ({ todos }) => (
  <div id="app">
    <header class="app-bar">
      <h1>HyperApp To Do</h1>
    </header>
    <section class="hero-section">
      <NewTodoInput placeholder="☑ What do you need to do ? " />
    </section>
    <section class="page-section">
      <header class="section-header">
        <h2 class="section-heading">To Do</h2>
        <div class="filter-section">
          <Filter filter={CONSTANTS.SHOW_ALL}>All</Filter>
          <Filter filter={CONSTANTS.SHOW_ACTIVE}>Active</Filter>
          <Filter filter={CONSTANTS.SHOW_COMPLETED}>Completed</Filter>
        </div>
      </header>
      <TodoList todos={todos} />
    </section>
  </div>
);
