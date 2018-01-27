// Super High Performance/Scalable Database

const NotFoundErr = new Error('TODO: Not found')
NotFoundErr.name = 'NOTFOUND'

export default class TodoDataLayer {
  constructor () {
    this.data = []
  }

  async index () {
    return this.data
  }

  async load (id) {
    const todo = this.data.find(t => t.id === id)

    if (!todo) {
      throw NotFoundErr
    }

    return todo
  }

  async save (todo) {
    this.data.push(todo)

    return todo
  }

  async update (id, todo) {
    if (!this.data.find(t => t.id === id)) {
      throw NotFoundErr
    }

    this.data = this.data.map(t => t.id === id ? todo : t)

    return todo
  }

  async delete (id) {
    if (!this.data.find(t => t.id === id)) {
      throw NotFoundErr
    }

    this.data = this.data.filter(t => t.id !== id)

    return null
  }
}
