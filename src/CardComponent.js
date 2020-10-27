import React, { Component } from 'react'
import Image from './Image'
class CardComponent extends Component {
  render () {
    return (
      <div>
        <div className='container' id='TheCard'>
          <p className='Title'>DERNIERS ARTICLES</p>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='card' style={{ width: '22rem' }}>
                <Image />
                <div className='card-body'>
                  <button className='btn btn-warning ' style={{ borderRadius: '25px' }}>14:10:20</button>
                  <div className='bonjour'>
                    <h4>Lorem ipsum dolor</h4>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk njdsdksfbvdvhdbvjdnvcsjcdjvnckdscof the card's content dfbhffbfdhjbfknbfkjk.</p>
                    <button className='btn btn-warning' id='btn'>Lire plus</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='card'>
                <Image />
                <div className='card-body'>
                  <button className='btn btn-warning' style={{ borderRadius: '25px' }}>14:10:20</button>
                  <div className='bonjour'>
                    <h4>Lorem ipsum dolor</h4>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk njdsdksfbvdvhdbvjdnvcsjcdjvnckdscof the card's content dfbhffbfdhjbfknbfkjk.</p>
                    <button className='btn btn-warning' id='btn'>Lire plus</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='card' style={{ width: '22rem' }}>
                <Image />
                <div className='card-body'>
                  <button className='btn btn-warning' style={{ borderRadius: '25px' }}>14:10:20</button>
                  <div className='bonjour'>
                    <h4>Lorem ipsum dolor</h4>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk njdsdksfbvdvhdbvjdnvcsjcdjvnckdscof the card's content dfbhffbfdhjbfknbfkjk.</p>
                    <button className='btn btn-warning' id='btn'>Lire plus</button>
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

export default CardComponent
