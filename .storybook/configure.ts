import {configure} from '@storybook/react'
import 'semantic-ui-less/definitions/globals/reset.less'
import 'semantic-ui-less/definitions/globals/site.less'

// Load all stories defined in our codebase
function loadStories() {
  const scopedRequire = require.context('..', true, /^\.\/.+.stories$/)
  scopedRequire.keys().forEach(scopedRequire)
}

configure(loadStories, module)
