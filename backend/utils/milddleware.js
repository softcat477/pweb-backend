// unknown endpoints
const unknownEndpoint = (request, response) => {
  console.log("Invalid endpoint: ", request.url);
  response.status(404).send({error: "unknown endpoint"})
}

module.exports = { unknownEndpoint }