const {db, WORKING, BROKEN} = require('../../../mongo/__tests__/_stubbedGoose')
const { spy, stub } = require('sinon')

const IS_AUTHENTICATED = 'AUTHENTICATED'
const UNAUTHENTICATED = 'NOT_AUTHENTICATED'

// If dbState is not set, I'm not even going to bother setting it
const mockReq = (isAuthenticated, dbState) => ({
  user: {
    _id: 123
  },
  isAuthenticated: stub().returns(!!(isAuthenticated === IS_AUTHENTICATED)),
  app: { locals: {
    db: (dbState !== undefined ? db(dbState) : null),
    config: {}
  } },
  body: {},
  params: {note: 'slug'},
  get: stub()
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

function mockRouteArgs (a) {
  // Just send in the proper constants, and I will figure out the rest
  let args = [...arguments]

  let isAuthenticated, dbState
  args.forEach((arg) => {
    if (arg === IS_AUTHENTICATED || arg === UNAUTHENTICATED) {
      isAuthenticated = arg
    } else if (arg === WORKING || arg === BROKEN) {
      dbState = arg
    }
  })
  return {
    req: mockReq(isAuthenticated, dbState),
    res: mockRes(),
    next: spy()
  }
}

module.exports = {
  IS_AUTHENTICATED,
  UNAUTHENTICATED,
  BROKENDB: BROKEN,
  WORKINGDB: WORKING,
  mockRouteArgs
}
