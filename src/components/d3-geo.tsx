import d3 from 'd3-geo';
import japan from '../../data/japan.json'
import { render } from 'react-dom'
import React from 'react';

const App = () => {

    const w = 600;
    const h = 600;
    const scale = 1200; //地図のスケール
    const projection = d3.geoMercator()
        .center([136.0, 35.6])
        .translate([w / 2, h / 2])
        .scale(scale);
    const path: string | undefined | null = d3.geoPath().projection(projection)(japan.features as any);
    return (
        <div>
            <svg width={w} height={h}>
                {
                    path &&
                    (<path d={path}>
                    </path>)
                }
            </svg>
        </div>
    )
}
render(<App />, document.getElementById("app"))