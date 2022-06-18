import React from 'react'

export default function Header() {
    return (
        <div className = " container-fluid navbar navbar-expand-lg navbar-dark  bg-light " >
                <a className = "navbar-brand" href = "#" >

                {/*
                    <span className = "navbar-brand fwc_spa">Develop with </span><img src = "../../assets/images/boostinorbit.svg" className = "img-size navbar-brand" alt = "BCS" / >
                */}
                    <span className = "navbar-brand fwc_spa">Develop with </span><img src = "../../assets/images/nheuristics.svg" className = "img-size navbar-brand" alt = "BCS" / >
                </a>

                <button type="button" className="navbar-toggler custom-btn" data-toggle="collapse" data-target="#menu" aria-expanded="true">
                    <div className="line-menubar"></div>
                    <div className="line-menubar"></div>
                    <div className="line-menubar"></div>
                </button>
                <div className="navbar-nav  collapse navbar-collapse  margin-right-40" id="menu">
                    <div className="navbar-nav mx-auto nav_responsive margin-right-40">
                      <a href = "/products" className = "fwc_pa" > Products < /a>
                      <a href = "/#" className = "fwc_pa" > Learn < /a>
                      <a href = "/#" className = "fwc_pa" > Updates < /a>
                    </div>

                    <div className="navbar-nav mx-auto nav_responsive margin-right-40">
                      <a href = "/#" className = "fwc_pa" > Blogs < /a>
                      <a href = "/#" className = "fwc_pa" > Customers < /a>
                    </div>


                      <div className = "navbar-nav mx-auto nav_responsive " id="menu">
                        {/*
                           <button type="text" className="btn btn-primary button_fwc_pa">GET STARTED FOR FREE</button>
                           <button type="text" className="btn btn-primary button_fwc_pa">Login</button>
                        */}
                           <a href = "https://bcsitsolutions.com" className = "linktoboostinorbit" > SWITCH TO BOOSTINORBIT< /a>

                     </div>


               </div>




        </div>

    )
}
