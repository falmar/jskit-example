export const decodeIndexTodoRequest = (ctx, req) => {
  return {}
}

export const encodeIndexTodoResponse = (ctx, res, response) => {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(response))
}

export const decodeLoadTodoRequest = (ctx, req) => {
  return {id: parseInt(req.params.id, 10)}
}

export const encodeLoadTodoResponse = (ctx, res, response) => {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(response))
}

export const decodeSaveTodoRequest = (ctx, req) => {
  return {todo: req.body}
}

export const encodeSaveTodoResponse = (ctx, res, response) => {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(response))
}

export const decodeUpdateTodoRequest = (ctx, req) => {
  return {id: parseInt(req.params.id, 10), todo: req.body}
}

export const encodeUpdateTodoResponse = (ctx, res, response) => {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(response))
}

export const decodeDeleteTodoRequest = (ctx, req) => {
  return {id: parseInt(req.params.id, 10)}
}

export const encodeDeleteTodoResponse = (ctx, res, response) => {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(response))
}
