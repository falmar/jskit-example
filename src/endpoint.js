export const indexTodoEnpoint = service => () => {
  return service.index()
}

export const loadTodoEnpoint = service => (ctx, request) => {
  return service.load(request.id)
}

export const saveTodoEndpoint = service => (ctx, request) => {
  return service.save(request.todo)
}

export const updateTodoEndpoint = service => (ctx, request) => {
  return service.update(request.id, request.todo)
}

export const deleteTodoEndpoint = service => (ctx, request) => {
  return service.delete(request.id)
}
