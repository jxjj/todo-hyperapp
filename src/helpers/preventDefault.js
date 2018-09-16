export default fn => (event) => {
  event.preventDefault();
  fn();
};
