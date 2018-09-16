import { h } from 'hyperapp';
import NewTodoInput from './NewTodoInput';
import TodoList from './TodoList';

export default ({ todos }) => (
  <div id="app">
    <header class="app-bar">
      <h1>Todos</h1>
    </header>
    <section class="hero-section">
      <NewTodoInput placeholder="What do you need to do?" />
    </section>
    <section class="page-section">
      <h2 class="section-heading">My List</h2>
      <TodoList todos={todos} heading="My List" />
      <div class="filter-section">
        <ul>
          <li>All</li>
          <li>Complete</li>
          <li>Incomplete</li>
        </ul>
      </div>
    </section>
  </div>
);
