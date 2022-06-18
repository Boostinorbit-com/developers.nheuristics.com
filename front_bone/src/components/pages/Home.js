import React from 'react'
import  Header  from "../shared/Header.js";
import  Footer  from "../shared/Footer.js";
import  APIs  from "../shared/APIs.js";
import  Products  from "../shared/Products.js";
import  Experts  from "../shared/Experts.js";
import  Upcomings  from "../shared/Upcomings.js";
import  Videos  from "../shared/Videos.js";

export default function Home() {
    return (
            <React.Fragment>
              <Header/>
              <div className="container-fluid banner row">
                  <div className="col-6 d1">
                      <p className="b_title"> Develop with Nheuristics </p>
                      {/*
                       <p className="b_description">  ugyuuieui eui uieui wuiey uy uieuioe yuie uiey euiyeui euieeui yeuiye uiey euiyeui e</p>
                       */}
                  </div>
                  <div className="container col-6 d2 ">
                      {/*
                      <img src="../../assets/images/banner-img2.png" alt="IMG" className="b_img"/>
                      */}
                  </div>
              </div>
              <APIs/>
              <Products/>
              <Videos/>
              {/*
              <Experts/>
              */}
              <Upcomings/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Footer/>
          </React.Fragment>


    )
}
