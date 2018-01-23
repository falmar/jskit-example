export default class Logger {
  constructor (svc) {
    this.svc = svc
  }

  async index () {
    const arr = await this.svc.index()

    console.log('amount: ', arr.length)

    return arr
  }

  async load (id) {
    const todo = await this.svc.load(id)

    console.log('loaded:', todo)

    return todo
  }

  async save (todo) {
    console.log(`saving:`, todo)

    return this.svc.save(todo)
  }

  async update (id, todo) {
    todo = await this.svc.update(id, todo)

    console.log(`updating [${id}]:`, todo)

    return todo
  }

  async delete (id) {
    const r = await this.svc.delete(id)

    console.log('deleted:', id)

    return r
  }
}
