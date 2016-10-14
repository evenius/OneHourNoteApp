const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const thunk = require('redux-thunk').default
const { createHistory } = require('history')
const { reduxReactRouter, ReduxRouter } = require('redux-router')
const { createStore, applyMiddleware, compose } = require('redux')
const { Route, IndexRoute } = require('react-router')

const Main = require('./components/Main')
const NoteView = require('./containers/NoteView')

const { reducers } = require('./reducers')

require('normalize.css')

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  compose(
    reduxReactRouter({ createHistory }),
    applyMiddleware(thunk)
  )
)

render(
  (<Provider store={store}>
    <ReduxRouter>
        <Route path='/' component={Main}>
          <IndexRoute component={NoteView}/>
          <Route path='/notes/:slug' component={NoteView}/>
        </Route>
    </ReduxRouter>
  </Provider>),
  document.getElementById('root')
)
