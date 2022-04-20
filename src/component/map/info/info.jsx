import React from 'react'

export default function Info({info,flag,loading}) {
  return (
    <div className="card fs-5">
      
    {loading?<h4>در حال بارگذاری...</h4>:<a href={flag}><img className="card-img-top" src={flag} alt={info.capital} /></a>}
    <ul className="list-group list-group-flush">
        <li className="list-group-item">پایتخت:{info.capital}</li>
        <li className="list-group-item"> زبان رسمی:{info.officialLanguages}</li>
        <li className="list-group-item">جمعیت:{info.populationEstimate} </li>
        <li className="list-group-item">واحد پول:{info.currency} </li>
    </ul>
</div>
  )
}
