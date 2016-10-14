const React = require('react')
const { shallow } = require('enzyme')

module.exports = {
   renderWithStore: function (component, props = {}, state = {}, dispatch = () => ({})) {
    const context = {
      store: {
        getState: () => state,
        subscribe: () => ({}),
        dispatch
      }
    }
    return shallow(React.createElement(component, props), { context })
  }
}
