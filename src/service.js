export default class Service {
  constructor (dataLayer) {
    this.dataLayer = dataLayer
  }

  index () {
    return this.dataLayer.index()
  }

  load (id) {
    return this.dataLayer.load(id)
  }

  save (todo) {
    return this.dataLayer.save(todo)
  }

  update (id, todo) {
    return this.dataLayer.update(id, todo)
  }

  delete (id) {
    return this.dataLayer.delete(id)
  }
}
