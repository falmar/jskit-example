const defaultOptions = {
  // catch unhandled errors
  errorHandler: res => err => {
    // do something with errors
    let code = 500

    if (err.name === 'NOTFOUND') {
      code = 404
    }

    res.status(code)
    res.header('Content-Type', 'application/json')
    res.send({
      status: code,
      error: 'Oops something went wrong',
      developerMessage: err.message
    })
    res.end()
  }
}

export const NewServer = (endpoint, decoder, encoder, options = {}) => {
  options = {...defaultOptions, ...options}

  return (req, res) => {
    const ctx = {}

    return decoder(ctx, req)
      .then(request => endpoint(ctx, request))
      .then(response => encoder(ctx, res, response))
      .catch(options.errorHandler(res))
  }
}
