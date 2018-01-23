export const indexTodoEnpoint = service => async () => {
  return service.index()
}

export const loadTodoEnpoint = service => async (ctx, request) => {
  return service.load(request.id)
}

export const saveTodoEndpoint = service => async (ctx, request) => {
  return service.save(request.todo)
}

export const updateTodoEndpoint = service => async (ctx, request) => {
  return service.update(request.id, request.todo)
}

export const deleteTodoEndpoint = service => async (ctx, request) => {
  return service.delete(request.id)
}
