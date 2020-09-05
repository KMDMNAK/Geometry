import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
// const geoUrl = "https://unpkg.com/jpn-atlas@1/japan.json"
const MapChart = () => {
    return (
        <ComposableMap
            // projection="geoAzimuthalEqualArea"
            projection="geoMercator"
            projectionConfig={{
                // rotate: [-20.0, -52.0, 0],
                // rotate: [210, -30, 0],
                scale: 150
            }}
            width={Number(window.innerWidth * 0.9)}
            height={Number(window.innerHeight * 0.8)}
        >
            <Graticule stroke="#EAEAEC" />
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#9998A3"
                            stroke="#EAEAEC"
                            onMouseEnter={() => {
                                const { NAME } = geo.properties;
                                console.debug({ NAME })
                            }}
                            style={{
                                default: {
                                    fill: "#D6D6DA",
                                    outline: "none"
                                },
                                hover: {
                                    fill: "#F53",
                                    outline: "none"
                                },
                                pressed: {
                                    fill: "#F53",
                                    outline: "none"
                                },
                            }}
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
    );
};

export default MapChart;
