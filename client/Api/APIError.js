// Just to simplify things, I let the error message and error-identifier
// be the same thing
const GENERIC_ERROR = 'Something went wrong'
const UNAUTHORIZED = 'You don\'t seem to be logged in anymore'
const SERVER_ERROR = 'Something happened on the server, please try again!'
const NOT_FOUND = 'Unable to find what you were looking for, sorry'

// This is the way to do it, according to https://developer.mozilla.org/sv-SE/docs/Web/JavaScript/Reference/Global_Objects/Error
function APIError (message) {
  this.message = message
  var last_part = new Error().stack.match(/[^\s]+$/)
  this.stack = `${this.name} at ${last_part}`
}

Object.setPrototypeOf(APIError, Error)
APIError.prototype = Object.create(Error.prototype)
APIError.prototype.name = 'APIError'
APIError.prototype.message = ''
APIError.prototype.constructor = APIError

const errorFromResponse = function (response) {
  // No problem? No problem!
  if (response.ok) {
    return null
  } else if (response.status === 500) {
    return new APIError(SERVER_ERROR)
  } else if (response.status === 403) {
    return new APIError(UNAUTHORIZED)
  } else if (response.status === 404) {
    return new APIError(NOT_FOUND)
  } else {
    return new APIError(GENERIC_ERROR)
  }
}
module.exports = {
  APIError,
  errorFromResponse,
  // Constants
  GENERIC_ERROR,
  UNAUTHORIZED,
  SERVER_ERROR,
  NOT_FOUND
}
