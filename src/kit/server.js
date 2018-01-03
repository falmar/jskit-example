export const NewServer = (endpoint, decoder, encoder) => {
  return (req, res) => {
    const context = {}

    const request = decoder(context, req)
    const response = endpoint(context, request)

    encoder(context, res, response)
  }
}
