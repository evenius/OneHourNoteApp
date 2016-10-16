const RESOLVINGAPI = true
const REJECTINGAPI = false

var sinon = require('sinon')
var sinonPromise = require('sinon-promise')
sinonPromise(sinon)

const stubApi = (isResolving) => {
  if (isResolving) {
    return {
      POST: sinon.promise().resolves({slug: 'blabla'}),
      PATCH: sinon.promise().resolves('ok'),
      DELETE: sinon.promise().resolves('ok')
    }
  } else {
    return {
      POST: sinon.promise().rejects('error'),
      PATCH: sinon.promise().rejects('error'),
      DELETE: sinon.promise().rejects('error')
    }
  }
}

module.exports = {
  stubApi,
  REJECTINGAPI,
  RESOLVINGAPI
}
