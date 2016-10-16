const { combineReducers } = require('redux')
const { routerStateReducer } = require('redux-router')

const user = require('./user')
const notes = require('./notes')
const notification = require('./notification')
const router = routerStateReducer

module.exports = {
  reducers: combineReducers({user, notes, router, notification})
}
