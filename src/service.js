export default class Service {
  constructor (dataLayer) {
    this.dataLayer = dataLayer
  }

  save (todo) {
    this.dataLayer.save(todo)

    return todo
  }
}
