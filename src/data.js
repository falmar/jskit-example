// Super High Performance/Scalable Database

export default class TodoDataLayer {
  constructor () {
    this.data = []
  }

  async index () {
    return this.data
  }

  async load (id) {
    return this.data.find(t => t.id === id)
  }

  async save (todo) {
    this.data.push(todo)

    return todo
  }

  async update (id, todo) {
    this.data = this.data.map(t => t.id === id ? todo : t)

    return todo
  }

  async delete (id) {
    this.data = this.data.filter(t => t.id !== id)

    return null
  }
}
