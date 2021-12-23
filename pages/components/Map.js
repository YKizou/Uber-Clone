import {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import * as turf from '@turf/turf'


mapboxgl.accessToken = 'pk.eyJ1IjoidGFvdXlha2l6IiwiYSI6ImNrd2M5bDFleTA5NGIybm4xZ2IwdmV0bTgifQ.z2SR41j5jR6y0e1-k26VFg';


const Map = (props) => {

    const [distance, setDistance] = useState('')

    useEffect(() => {
        console.log("props", props)
        const pickupCoord = props.pickupCoordinate
        const dropoffCoord = props.dropoffCoordinate
        console.log("pickupCoord", pickupCoord)
        console.log("dropoffCoord", dropoffCoord)

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-96, 37.8],
            zoom: 3,
        })

        if(pickupCoord && dropoffCoord){
            addToMap(map, pickupCoord, dropoffCoord)
        }

    },)
    

    const addToMap = (map, pickupCoord, dropoffCoord) => {
        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker()
        .setLngLat(pickupCoord)
        .addTo(map);

        // Create a default Marker and add it to the map.
        const marker2 = new mapboxgl.Marker()
        .setLngLat(dropoffCoord)
        .addTo(map);

        // Add padding to the map to visualize correctly the markers
        map.fitBounds([pickupCoord, dropoffCoord], 
            {padding: 100 
        });

    }
    

    return  (
        <Wrapper id='map'></Wrapper>
    )


}

export default Map

const Wrapper = tw.div`
flex flex-1  

`