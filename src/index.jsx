import React from 'react';
import { render } from 'react-dom';
import Map from './components/vectormap'
const App = () => {
    return (
        <div>
            <Map />
        </div>
    )
}
render(
    (<div>
        <App />
    </div>),
    document.getElementById("app")
)