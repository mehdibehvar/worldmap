import React, { useState,useEffect } from 'react'
import Info from './info/info';
import Summary from './summary/summary';
import WordMap from './wordmap';
// import wiki from 'wikijs';
export default function WikiPedia() {
    const [selectedcountry,setSelectedcountry]=useState("iran");
    // useEffect(() => {
    //     wiki()
    //     .page(selectedcountry)
    //     .then(page => page.info(selectedcountry))
    //     .then(console.log); 
    // },[selectedcountry])
    
    function changeCountry(name) {
        setSelectedcountry(name)
    }
  return (
    <div className="container mt-3">
    <div className="row">
        <div className="col col-md-9">
            <WordMap changeCountry={changeCountry}/>
        </div>
        <div className="col-12 col-md-3">
             <Info/>
        </div>
    </div>
    <div className="row mt-3">
        <div className="mx-2">
          <Summary/>
        </div>
    </div>
</div>
  )
}
