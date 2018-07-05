import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Root from './containers/Root'

import Typography from 'typography'
import theme from 'typography-theme-github'
import './index.css'

const typography = new Typography(theme)
typography.injectStyles()

render(<Root />, document.getElementById('root'))

registerServiceWorker()
