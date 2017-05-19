import {configure} from '@storybook/react'
import 'normalize.css'

// Load all stories defined in our codebase
function loadStories() {
  const scopedRequire = require.context('..', true, /^\.\/.+.stories$/)
  scopedRequire.keys().forEach(scopedRequire)
}

configure(loadStories, module)
