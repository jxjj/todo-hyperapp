import { h } from 'hyperapp';
import NewTodoInput from './NewTodoInput';
import TodoList from './TodoList';
import FilterButton from './FilterButton';
import * as CONSTANTS from '../constants';
import AppBar from './AppBar';
import './App.css';

export default ({ todos }) => (
  <div id="app">
    <AppBar>HyperToDo</AppBar>
    <section class="page-section hero-section">
      <div class="container">
        <NewTodoInput placeholder="☑ What do you need to do ? " />
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <header class="section-header">
          <h2 class="section-heading">To Do</h2>
          <div class="filter-button-group">
            <FilterButton filter={CONSTANTS.SHOW_ALL}>All</FilterButton>
            <FilterButton filter={CONSTANTS.SHOW_ACTIVE}>Active</FilterButton>
            <FilterButton filter={CONSTANTS.SHOW_COMPLETED}>Completed</FilterButton>
          </div>
        </header>
        <TodoList todos={todos} />
      </div>
    </section>
    <footer class="page-footer">
      <div class="container">
        <p>
          An experiment with <a href="https://github.com/jorgebucaran/hyperapp">HyperApp.js</a> by{' '}
          <a href="https://github.com/jxjj">James Johnson</a>
        </p>
      </div>
    </footer>
  </div>
);
