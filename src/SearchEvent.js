import React, { Component } from 'react'

class SearchEvent extends Component {
  render () {
    return (
      <div>
        <div className='container' id='container'>
          <div className='back'>
            <div className='row'>
              <div id='event'>
                <h5>Rechercher des événements</h5>
                <div className='saerch'>
                  <input
                    placeholder='Rechercher un événement'
                  />
                  <div>
                    <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-search' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                      <path fill-rule='evenodd' d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z' />
                      <path fill-rule='evenodd' d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z' />
                    </svg>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className='filtrage'>
              <h5>Filtrage des événements</h5>
              <select className='select'>
                <option>mois</option>
                <option>Janvier</option>
                <option>Février</option>
                <option>Mars</option>
                <option>Avril</option>
                <option>Mai</option>
                <option>Juin</option>
                <option>Juillet</option>
                <option>Août</option>
                <option>Septembre</option>
                <option>Octobre</option>
                <option>Novembre</option>
                <option>Décembre</option>
              </select>
            </div>
            <div className='filtrage'>
              <h5>Filtrage des événements</h5>
              <select className='select'>
                <option>mois</option>
                <option>Janvier</option>
                <option>Février</option>
                <option>Mars</option>
                <option>Avril</option>
                <option>Mai</option>
                <option>Juin</option>
                <option>Juillet</option>
                <option>Août</option>
                <option>Septembre</option>
                <option>Octobre</option>
                <option>Novembre</option>
                <option>Décembre</option>
              </select>
            </div>
            <div>
              <button>Rechercher</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchEvent
