const {db, WORKING, BROKEN} = require('../../../mongo/__tests__/_stubbedGoose')
const { spy, stub } = require('sinon')

// If dbState is not set, I'm not even going to bother setting it
const mockReq = (dbState) => ({
  user: {
    _id: 123
  },
  app: { locals: {
    db: (dbState !== undefined ? db(dbState) : null),
    config: {}
  } },
  body: {},
  params: {note: 'slug'},
  get: spy()
})

const mockRes = () => {
  // Prevents it setting the stub every. Single. Time.
  let statusStub = stub()

  return {
    set: spy(),
    send: spy(),
    render: spy(),
    redirect: spy(),
    get status () {
      return statusStub.returns(this)
    }
  }
}

const mockRouteArgs = (dbState) => ({
  req: mockReq(dbState),
  res: mockRes()
})

module.exports = {
  BROKENDB: BROKEN,
  WORKINGDB: WORKING,
  mockRouteArgs
}
