let { errorFromResponse, APIError } = require('./APIError')

let request = (path, method, data) => window.fetch(path, {
  method,
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
}).then(response => {
  if (response.ok) {
    if (response.headers.get('Content-Type').indexOf('application/json') !== -1) {
      return response.json()
    } else {
      return response.text()
    }
  } else {
    throw errorFromResponse(response)
  }
})

module.exports = {
  request,
  // responseError,
  POST: (path, data) => request(path, 'POST', data),
  PATCH: (path, data) => request(path, 'PATCH', data),
  DELETE: (path, data) => request(path, 'DELETE', data)
}
