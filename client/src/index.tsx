import React from 'react'
import { render } from 'react-dom'
import Map from './components/Map'

const app = document.getElementById('app')

render(
    <div>
        Hello World
         <Map />
    </div>, app
)