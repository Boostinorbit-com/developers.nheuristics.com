import React from 'react'

export default function Videos() {
    return (

      <div className="container">
            <p className="sec_2_title"> Nheuristics Delta Members</p>
            <br/>
            <br/>
            <br/>
            <div className="row">
              <div className="pname card col-lg-3  col-sm-6 col-md-6 mobile-m">
                  <img className="card-img-top" src="../../assets/images/sara_logo.svg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  </div>
              </div>
              <div className="pname card col-lg-3  col-sm-6 col-md-6 mobile-m">
                  <img className="card-img-top" src="../../assets/images/sara_logo.svg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  </div>
              </div>
              <div className="pname card col-lg-3  col-sm-6 col-md-6 mobile-m">
                  <img className="card-img-top" src="../../assets/images/sara_logo.svg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  </div>
              </div>
              <div className="pname card col-lg-3  col-sm-6 col-md-6 mobile-m">
                  <img className="card-img-top" src="../../assets/images/sara_logo.svg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  </div>
              </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="pname youtube col-lg-6 col-sm-6 col-md-6 mobile-m">
                <div className= "player" id="player">
                </div>
                <p className="delta-members"> Sara</p>
            </div>
            <div className="pname youtube col-lg-6 col-sm-6 col-md-6 mobile-m">
                <div className= "player" id="player">
                </div>
                <p className="delta-members"> Olex </p>
            </div>

          </div>


      </div>
    )
  }
