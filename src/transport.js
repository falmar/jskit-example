export const decodeIndexTodoRequest = async (ctx, req) => ({})

export const encodeIndexTodoResponse = async (ctx, res, response) => {
  const body = JSON.stringify(response)

  res.header('Content-Type', 'application/json')
  res.send(body)

  return body
}

export const decodeLoadTodoRequest = async (ctx, req) => {
  return {id: parseInt(req.params.id, 10)}
}

export const encodeLoadTodoResponse = async (ctx, res, response) => {
  const body = JSON.stringify(response)

  res.header('Content-Type', 'application/json')
  res.send(body)

  return body
}

export const decodeSaveTodoRequest = async (ctx, req) => {
  return {todo: req.body}
}

export const encodeSaveTodoResponse = async (ctx, res, response) => {
  const body = JSON.stringify(response)

  res.header('Content-Type', 'application/json')
  res.send(body)

  return body
}

export const decodeUpdateTodoRequest = async (ctx, req) => {
  return {id: parseInt(req.params.id, 10), todo: req.body}
}

export const encodeUpdateTodoResponse = async (ctx, res, response) => {
  const body = JSON.stringify(response)

  res.header('Content-Type', 'application/json')
  res.send(body)

  return body
}

export const decodeDeleteTodoRequest = async (ctx, req) => {
  return {id: parseInt(req.params.id, 10)}
}

export const encodeDeleteTodoResponse = async (ctx, res, response) => {
  const body = JSON.stringify(response)

  res.header('Content-Type', 'application/json')
  res.send(body)

  return body
}
