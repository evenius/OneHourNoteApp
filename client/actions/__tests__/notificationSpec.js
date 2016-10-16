const { describe, it, beforeEach } = require('mocha')
const proxyquire = require('proxyquire')
const { spy, match } = require('sinon')
const { expect } = require('chai')

const { stubApi, REJECTINGAPI, RESOLVINGAPI} = require('./_apiStub')
const { bindFetchToWindow, unbindFetchFromWindow } = require('../../Api/__tests__/_fetchStub')

describe('Notification actions', function () {
  it('dispatches error')
  it('dispatches info')
})
