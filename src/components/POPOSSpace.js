// src/POPOSSpace.js

import './POPOSSpace.css';
import logo from '../logo.svg'
import { Link } from 'react-router-dom'


function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <Link to={`/details/${id}`}>
      <div className = 'POPOSSpace'>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
            width="300"
            height="300"
            alt="50 Califonia St."
          />
        <h1>{name}</h1>
        <div>{address}</div>
        <p>{hours}</p>
      </div>
    </Link>
  )
}

export default POPOSSpace