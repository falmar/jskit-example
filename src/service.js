export default class Service {
  constructor (dataLayer) {
    this.dataLayer = dataLayer
  }

  async index () {
    return this.dataLayer.index()
  }

  async load (id) {
    const todo = await this.dataLayer.load(id)

    if (!todo) {
      throw new Error(`TODO [${id}]: not found`)
    }

    return todo
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
