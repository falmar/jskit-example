export const decodeSaveTodoRequest = (ctx, req) => {
  return {todo: req.body}
}

export const encodeSaveTodoResponse = (ctx, res, response) => {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(response))
}
