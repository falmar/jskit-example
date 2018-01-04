export default class Logger {
  constructor (svc) {
    this.svc = svc
  }

  index () {
    const arr = this.svc.index()

    console.log('amount: ', arr.length)

    return arr
  }

  load (id) {
    const todo = this.svc.load(id)

    console.log('loaded:', todo)

    return todo
  }

  save (todo) {
    return this.svc.save(todo)
  }

  update (id, todo) {
    todo = this.svc.update(id, todo)

    console.log(`updating [${id}]:`, todo)

    return todo
  }

  delete (id) {
    const r = this.svc.delete(id)

    console.log('deleted:', id)

    return r
  }
}
