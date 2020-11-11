import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './DogList.css'

export class DogList extends Component {
  render() {
    return (
      <div className='DogList'>
        <h1 className='display-1 text-center mt-3 mb-5'>Doggos</h1>
          <div className='row'>
            {this.props.dogs.map(dog => (
            <div className='Dog col-4 text-center' key={dog.name}>
              <Link to={`/dogs/${dog.name}`}><img src={dog.src} alt={dog.name}/></Link>
              <h3 className='mt-3'>
              <Link className='underline' to={`/dogs/${dog.name}`}>
                {dog.name}
                </Link>
                </h3>
            </div>

            ))}
          </div>
        </div>
    )
  }
}

export default DogList
