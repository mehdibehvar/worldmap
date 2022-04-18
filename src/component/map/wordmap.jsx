import React from 'react'
import ImageMapper from 'react-image-mapper';
import MapImage from '../../assets/image/world-map.gif';
import Coords from './coords.json'
export default function WordMap({changeCountry}) {
  return (
<ImageMapper 
onClick={e=>changeCountry(e.name)}
src={MapImage}
 map={Coords}
 width={950}
 imgWidth={1200}
 />
  )
}
