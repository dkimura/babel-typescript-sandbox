import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'

const root = document.getElementById('root')

const Hello = () => <div>Hello World!</div>

const App = hot(Hello)

render(<App />, root)
