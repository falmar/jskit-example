export default class Logger {
  constructor (svc) {
    this.svc = svc
  }

  save (todo) {
    console.log('saving: ', todo)

    return this.svc.save(todo)
  }
}
