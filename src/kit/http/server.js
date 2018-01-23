export const NewServer = (endpoint, decoder, encoder) => {
  return (req, res) => {
    const ctx = {}

    return decoder(ctx, req)
      .then(request => endpoint(ctx, request))
      .then(response => encoder(ctx, res, response))
      .catch(err => console.error(err))
  }
}
