import { h } from 'hyperapp';
import cc from 'classcat';

export default ({ filter }, children) => (state, actions) => (
  <button
    class={cc(['filter', { 'is-active': filter === state.filter }])}
    onclick={() => actions.setFilter(filter)}
  >
    {children}
  </button>
);
