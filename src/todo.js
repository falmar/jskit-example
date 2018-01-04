export default class TodoDataLayer {
  constructor () {
    this.data = []
  }

  index () {
    return this.data
  }

  load (id) {
    return this.data.find(t => t.id === id)
  }

  save (todo) {
    this.data.push(todo)

    return todo
  }

  update (id, todo) {
    this.data = this.data.map(t => t.id === id ? todo : t)

    return todo
  }

  delete (id) {
    this.data = this.data.filter(t => t.id !== id)

    return null
  }
}
