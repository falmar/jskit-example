const defaultOptions = {
  errorHandler: res => err => {
    // do something with errors
    res.status(500)
    res.header('Content-Type', 'application/json')
    res.send({
      status: 500,
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
