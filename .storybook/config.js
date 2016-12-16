const {configure} = require('@kadira/storybook')

configure(loadStories, module)

function loadStories() {
  // Load normalize.css
  require('normalize.css')

  // Style root container
  const {CONTAINER_STYLE} = require('../src/app/styles')
  const root = document.getElementById('root')
  root.style.cssText = ''
  Object.assign(root.style, CONTAINER_STYLE)

  // Load all stories defined in our codebase
  const req = require.context('../src', true, /\.stories$/)
  req.keys().forEach(req)
}
