import { h } from 'hyperapp';

export default () => (
  <div id="app">
    <header class="app-bar">
      <h1>Todos</h1>
    </header>
    <section class="hero-section">
      <div class="new-todo input-group">
        <input id="new-todo" placeholder="What do you need to do?" />
      </div>
    </section>
    <section class="page-section">
      <h2 class="section-heading">My List</h2>
      <ul class="todo-list">
        <li class="todo-item">
          <label>
            <input type="checkbox" value="completed" />
            Walk the Cat
          </label>
          <button class="btn-delete">&times;</button>
        </li>
        <li class="todo-item">
          <label>
            <input type="checkbox" value="completed" />
            Play with kitties
          </label>
          <button class="btn-delete">&times;</button>
        </li>
        <li class="todo-item completed">
          <label>
            <input type="checkbox" value="completed" /> Get Milk
          </label>
          <button class="btn-delete">&times;</button>
        </li>
      </ul>
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
