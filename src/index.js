import { app } from 'hyperapp';

import actions from './actions';
import state from './state';
import view from './components/App';

const appArgs = [state, actions, view, document.body];

function onMount() {}

let main;

if (process.env.NODE_ENV !== 'production') {
  import('hyperapp-redux-devtools').then((devtools) => {
    main = devtools(app)(...appArgs);

    onMount(main);
  });
} else {
  main = app(...appArgs);

  onMount(main);
}
