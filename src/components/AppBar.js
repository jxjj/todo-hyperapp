import { h } from 'hyperapp';
import './AppBar.css';

export default (_, children) => (
  <header class="app-bar">
    <div class="container">
      <h1>{children}</h1>
    </div>
  </header>
);
