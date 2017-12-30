export default class TodoDataLayer {
  constructor () {
    this.data = []
  }

  load (id) {
    this.data.find(t => t.id === id)
  }

  save (todo) {
    this.data.push(todo)
  }

  update (todo) {
    this.data.map(t => t.id === todo.d ? todo : t)
  }

  delete (todo) {
    this.data.filter(t => t.id !== todo.id)
  }
}
