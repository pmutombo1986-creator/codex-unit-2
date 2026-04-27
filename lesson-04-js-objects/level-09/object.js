// TODO: Declare named functions then assign them as methods on the exported object.
// Example:
// function greet(name) { return 'Hi ' + name }
// const user = { name: 'Ava' }
// user.greet = greet
// export default user
function greet (firstName, middleName, lastName) { return 'Hi' + firstName}
const user = {
  /* TODO: add name */
  firstName: 'Vicky',
  middleName: 'Christina',
  lastName: 'Barcelona'
};
user.greet = greet;
export default user;
