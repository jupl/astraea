const {configure} = require('@kadira/storybook')

configure(loadStories, module)

function loadStories() {
  // Load normalize.css
  require('normalize.css')

  // Load all stories defined in our codebase
  const req = require.context('../src', true, /\.stories$/)
  req.keys().forEach(req)
}
