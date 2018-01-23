// List TODOS
export const indexTodoEnpoint = service => async () => {
  return service.index()
}

// Load TODO
export const loadTodoEnpoint = service => async (ctx, request) => {
  return service.load(request.id)
}

// Add new TODO
export const saveTodoEndpoint = service => async (ctx, request) => {
  return service.save(request.todo)
}

// Update existing TODO
export const updateTodoEndpoint = service => async (ctx, request) => {
  return service.update(request.id, request.todo)
}

// Delete TODO
export const deleteTodoEndpoint = service => async (ctx, request) => {
  return service.delete(request.id)
}
