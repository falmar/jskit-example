export default class Logger {
  constructor (svc, superFancyLogger) {
    this.svc = svc
    this.logger = superFancyLogger
  }

  async index () {
    try {
      const arr = await this.svc.index()

      this.logger.log('TODOS found: ', arr.length)

      return arr
    } catch (err) {
      this.logger.error(`Error while loading todos: ${err.message}`)

      throw err
    }
  }

  async load (id) {
    try {
      const todo = await this.svc.load(id)

      this.logger.log('loaded:', todo)

      return todo
    } catch (err) {
      this.logger.error(`Error while loading todo: ${err.message}`)

      throw err
    }
  }

  async save (oldTodo) {
    try {
      const todo = await this.svc.save(oldTodo)

      this.logger.log(`saving TODO:`, oldTodo)

      return todo
    } catch (err) {
      this.logger.error(`Error while saving todo: ${err.message}`)

      throw err
    }
  }

  async update (id, todo) {
    try {
      todo = await this.svc.update(id, todo)

      this.logger.log(`updating TODO [${id}]:`, todo)

      return todo
    } catch (err) {
      this.logger.error(`Error while updating todo ${id}: ${err.message}`)

      throw err
    }
  }

  async delete (id) {
    try {
      const r = await this.svc.delete(id)

      this.logger.log('deleted TODO:', id)

      return r
    } catch (err) {
      this.logger.error(`Error while deleting todo ${id}: ${err.message}`)

      throw err
    }
  }
}
