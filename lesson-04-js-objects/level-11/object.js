// TODO: Build an object from a written specification and export it as default.
// Example spec: book with title, author, pages, and a summary() method assigned from a named function.
function summary() {
  return `${this.title} by ${this.author}`
}
const book = {
  /* TODO: implement spec */
  title: 'The Great Gatspy', author: 'F.Scott Fitzgeral', pages: 120
};
book.summary = summary;
export default book;

function profile() {
  return `${this.name} by ${this.age}`
}
const person = {
  name: 'christina', age: 27, gender: 'female'
};
person.profile = profile;
export default person;