const updateCollection = (coll, id, prop) =>
  coll.map(item => (item.id === id ? { ...item, ...prop } : item));

const getItem = (coll, id) => coll.find(item => item.id === id);

export default {
  add: (/* event (e) */) => ({ num }) => ({ num: num + 1 }),
  sub: (/* event (e) */) => ({ num }) => ({ num: num - 1 }),
  toggleCompleted: id => (state) => {
    console.log(id);
    const todo = getItem(state.todos, id);
    const completed = !todo.completed;
    const updatedTodos = updateCollection(state.todos, id, { completed });
    return { todos: updatedTodos };
  },
};
