import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'

export default function CountryDetails(props){
  let countriesResult = [...countries]
  let searchCriterium = props.match.params.cca3
  console.log(searchCriterium)
  // let countryResult = countriesResult.find(props.cca3)
  const countryResult = countriesResult.find(({cca3}) => cca3 === searchCriterium)


  //NO ENTENDI BIEN LO DE EL UNMOUNTING :O 
  // useEffect(() => {
  //   return () => {
  //   }
  // }, [countryResult])

  return (
    <div>
      <h1>{countryResult.name.common}</h1>
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{countryResult.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{countryResult.area} km<sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryResult.borders.map(el => (
                  <li key={el}>
                    <Link to={`/${el}`}>
                      {(countriesResult.find(({cca3}) => cca3 === el)).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}