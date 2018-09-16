import { h } from 'hyperapp';
import cc from 'classcat';
import './FilterButton.css';

export default ({ filter }, children) => (state, actions) => (
  <button
    class={cc(['filter-button', { 'is-active': filter === state.filter }])}
    onclick={() => actions.setFilter(filter)}
  >
    {children}
  </button>
);
