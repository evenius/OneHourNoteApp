var sinon = require('sinon')
var sinonPromise = require('sinon-promise')
sinonPromise(sinon)

module.exports = {
  bindFetchToWindow: () => {
    // create a promise that resolves into a promise that resolves into 'cool'.
    let spies = {
      fetchSpy: sinon.promise(),
      jsonSpy: sinon.promise(),
      textSpy: sinon.promise()
    }
    global.window = {
      fetch: spies.fetchSpy.resolves(
        {
          json: spies.jsonSpy.resolves('cool'),
          text: spies.textSpy.resolves('cool')
        }
      )
    }

    return spies
  },
  unbindFetchFromWindow: () => {
    global.window = undefined
  }
}
