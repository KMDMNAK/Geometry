import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule
} from "react-simple-maps";
import { MapColorChanger, NewsGetter, CountryData } from '../modules/news2map'

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
// const geoUrl = "https://unpkg.com/jpn-atlas@1/japan.json"
const MapChart = () => {
    const colorChanger = new MapColorChanger('GREEN')
    const newsGetter = new NewsGetter()
    const newsAmounts = newsGetter.getNewsAmount()

    return (
        <ComposableMap
            // projection="geoAzimuthalEqualArea"
            projection="geoMercator"
            projectionConfig={{
                // rotate: [-20.0, -52.0, 0],
                rotate: [0, 0, 0],
                scale: 100
            }}
            width={Number(window.innerWidth * 0.9)}
            height={Number(window.innerHeight * 0.8)}
        >
            <Graticule stroke="#EAEAEC" />
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => {
                        const { NAME } = geo.properties;
                        const countryData = newsAmounts[NAME]
                        if (countryData) {
                            console.debug(colorChanger.getCountryColor(countryData))
                        }
                        const { color } = countryData ? colorChanger.getCountryColor(countryData) : { color: "#D6D6DA" }
                        return <EachCountry geo={geo} color={color} name={NAME} />
                    })}
            </Geographies>
        </ComposableMap>
    );
};

const EachCountry = (props: { geo: any, color: string, name: string }) => {

    return (
        <Geography
            key={props.geo.rsmKey}
            geography={props.geo}
            fill="#9998A3"
            stroke="#EAEAEC"
            onMouseEnter={() => {
                console.debug({ name: props.name })
            }}
            style={{
                default: {
                    fill: props.color,
                    outline: "none"
                },
                hover: {
                    fill: "#FF0000",
                    outline: "none"
                },
                pressed: {
                    fill: "#F53",
                    outline: "none"
                },
            }}
        />
    )
}

export default MapChart;
