export const saveTodoEndpoint = service => {
  return (ctx, request) => {
    return service.save(request.todo)
  }
}
