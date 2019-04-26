import {addParameters, configure} from '@storybook/react'
import {themes} from '@storybook/theming'
import 'normalize.css'

// Load all stories defined in our codebase
const loadStories = () => {
  const scopedRequire = require.context('..', true, /^\.\/.+.stor(y|ies)$/)
  scopedRequire.keys().forEach(scopedRequire)
}

addParameters({options: {theme: themes.dark}})
configure(loadStories, module)
