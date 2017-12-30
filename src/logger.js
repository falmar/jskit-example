export default class Logger {
  constructor (svc) {
    this.svc = svc
  }

  save (todo) {
    this.svc.save(todo)

    console.log('saved: ', todo)
  }
}
