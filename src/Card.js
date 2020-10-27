import React, { Component } from 'react'
import Imag from './Imag'
class Card extends Component {
  render () {
    return (
      <div>
        <div className='container' id='plCard'>
          <div className='row'>
            <div className='col-12'>
              <div className='card mb-3' style={{ maxWidth: '1040px' }}>
                <div className='row no-gutters'>
                  <div className='col-md-4'>
                    <Imag />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <div className='bonsoir'>
                        <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-calendar3' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                          <path fill-rule='evenodd' d='M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z' />
                          <path fill-rule='evenodd' d='M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
                        </svg>
                        <p>23 octobre 2020-0710</p>
                      </div>
                      <div className='bonjour'>
                        <h4>Lorem ipsum dolor</h4>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk njdsdksfbvdvhdbvjdnvcsjcdjvnckdscof the card's content dfbhffbfdhjbfknbfkjk.Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p>
                        <button className='btn btn-warning' id='btno'>Lire plus</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container' id='plCard'>
          <div className='row'>
            <div className='col-12'>
              <div className='card mb-3' style={{ maxWidth: '1040px' }}>
                <div className='row no-gutters'>
                  <div className='col-md-4'>
                    <Imag />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <div className='bonsoir'>
                        <svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-calendar3' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                          <path fill-rule='evenodd' d='M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z' />
                          <path fill-rule='evenodd' d='M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
                        </svg>
                        <p>23 octobre 2020-0710</p>
                      </div>
                      <div className='bonjour'>
                        <h4>Lorem ipsum dolor</h4>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk njdsdksfbvdvhdbvjdnvcsjcdjvnckdscof the card's content dfbhffbfdhjbfknbfkjk.Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p>
                        <button className='btn btn-warning' id='btno'>Lire plus</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
