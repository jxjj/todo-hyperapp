import * as CONSTANTS from './constants';

export default {
  newTodoInput: '',
  filter: CONSTANTS.SHOW_ALL,
  todos: [
    {
      id: 1,
      text: 'Play with the Kitties',
      completed: false,
    },
    {
      id: 2,
      text: 'Develop Super Annihilation Death Laser',
      completed: false,
    },
    {
      id: 3,
      text: 'Buy Kibbles and Bits',
      completed: true,
    },
  ],
};
