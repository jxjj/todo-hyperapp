import uuid from 'uuid/v4';

const updateCollection = (coll, id, prop) =>
  coll.map(item => (item.id === id ? { ...item, ...prop } : item));

const getItem = (coll, id) => coll.find(item => item.id === id);

export default {
  toggleCompleted: id => (state) => {
    const todo = getItem(state.todos, id);
    const updatedTodos = updateCollection(state.todos, id, { completed: !todo.completed });

    return { todos: updatedTodos };
  },

  addTodo: text => (state) => {
    const newTodo = {
      id: uuid(),
      text,
      completed: false,
      editing: false,
    };
    return { todos: state.todos.concat(newTodo) };
  },

  removeTodo: id => state => ({
    todos: state.todos.filter(item => item.id !== id),
  }),

  updateNewTodoInput: text => ({ newTodoInput: text }),

  setFilter: filtername => ({ filter: filtername }),
};
