import * as CONSTANTS from './constants';

export default {
  newTodoInput: '',
  filter: CONSTANTS.SHOW_ALL,
  todos: [
    {
      id: 1,
      text: 'Walk the Cat',
      completed: false,
    },
    {
      id: 2,
      text: 'Play with Kitties',
      completed: false,
    },
    {
      id: 3,
      text: 'Buy Kibbles and Bits',
      completed: true,
    },
  ],
};
