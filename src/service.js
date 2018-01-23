export default class Service {
  constructor (dataLayer) {
    this.dataLayer = dataLayer
  }

  async index () {
    return this.dataLayer.index()
  }

  async load (id) {
    return this.dataLayer.load(id)
  }

  async save (todo) {
    return this.dataLayer.save(todo)
  }

  async update (id, todo) {
    return this.dataLayer.update(id, todo)
  }

  async delete (id) {
    return this.dataLayer.delete(id)
  }
}
