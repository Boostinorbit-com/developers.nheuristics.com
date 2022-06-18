import React from 'react'

export default function Header() {
    return (

      <div className="container">
            <p className="sec_2_title"> Nheuristics Applications  </p>
            {/*
            <p className="sec_2_title_description"> These speeds are excellent. Its rare that a fast connection safety Internet leading speeds across its network.</p>
            */}
            <br/>
            <br/>
            <br/>
            <div className="container row row1">
                <div className="pname col-lg-3  col-sm-6 col-md-6 mobile-m">
                  <img src="../../assets/images/twelnet_logo.svg" alt="IMG" className="p_icon"/>
                  <p className="product_title"> Twelnet </p>
                </div>

                {/*
                <div className=" pname col-lg-4  col-sm-6 col-md-6 mobile-m " >
                  <img src="../../assets/images/services_icon1.png" alt="IMG" className="p_icon"/>
                  <p className="product_title"> Ontime HR Tool </p>
                </div>
                */}

                <div className=" pname col-lg-3  col-sm-6 col-md-6 mobile-m " >
                  <img src="../../assets/images/bubbleshub_logo.svg" alt="IMG" className="p_icon"/>
                  <p className="product_title"> Bubbleshub </p>
                </div>

                <div className="pname col-lg-3  col-sm-6 col-md-6 mobile-m">
                  <img src="../../assets/images/ontime_logo.svg" alt="IMG" className="p_icon"/>
                  <p className="product_title"> Ontime </p>
                </div>

                <div className="pname col-lg-3  col-sm-6 col-md-6 mobile-m ">
                  <img src="../../assets/images/hirebuff_logo.svg" alt="IMG" className="p_icon"/>
                  <p className="product_title"> Hirebuff </p>
                </div>

                {/*
                <div className="col-lg-4  col-sm-6 col-md-6 mobile-m ">
                  <img src="../../assets/images/twelnet_logo.svg" alt="IMG" className="p_icon"/>
                  <p className="product_title"> Twelnet </p>
                </div>
                */}

                <div className="pname col-lg-3  col-sm-6 col-md-6 mobile-m">
                  <img src="../../assets/images/boostinorbit_logo.svg" alt="IMG" className="p_icon"/>
                  <p className="product_title"> Boostinorbit </p>
                </div>

                <div className="pname col-lg-3  col-sm-6 col-md-6 mobile-m">
                  <img src="../../assets/images/xtrim_logo.svg" alt="IMG" className="p_icon"/>
                  <p className="product_title"> XTrim </p>
                </div>
            </div>

        </div>


    )
  }
