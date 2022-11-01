import React from 'react'
import { Nav, Button, Container } from 'react-bootstrap';
import Image from 'next/future/image'
import Svg1 from '../images/semicircle(1).png'
import Svg2 from '../images/zigzag-lines-in-side-view-position.png'
import Image1 from '../images/student-hand-removebg-preview.png'
import { Whatsapp } from 'react-bootstrap-icons';
import Svg3 from '../images/star2.png'

function Homepage() {
  return (
    <div>
      <section className="home section-margin" id='home'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                  <a className="navbar-brand mx-3 " href="#home"><strong className='text-purple'>Gurukul Pharmacy</strong></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mx-auto">
                      <li className="nav-item">
                        <a className="nav-link nav-bold mx-1 active" aria-current="page" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link nav-bold mx-1" href="#aboutUs">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link nav-bold mx-1" href="#committees">Committees
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link nav-bold mx-1" href="#contactus">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Nav>
              <div className="container  ">

                <div className="row mx-2 margin">
                  <div className="d-none d-sm-block d-md-block">
                    <Image src={Svg1} className='homepage-svg1' />
                    <Image src={Svg3} className='homepage-svg3' />
                  </div>
                  <h1 className=" mt-5 heading-home">Best Pharma</h1>
                  <h1 className=" mt-2 ms-1  heading-home-Education">Education</h1>
                  <h1 className="mt-4  heading-home">Solution</h1>
                </div>
                <div className="mt-3 mx-2">
                  <button type="button" className="btn button button-homepage"><a href="#contactus" className="button-homepage">Contact Us</a></button>
                </div>
              </div>
              <div className="d-none d-sm-block d-md-block ">
                <Image className="homepage-svg2" src={Svg2} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 home-background">
              <div className="container">
                <div className="row">
                  <div class="col col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 circle">
                    <div class="d-none d-sm-block d-md-block d-xs-block text-center">
                      <svg class="mt-5 roundtext svgText" viewBox="0 0 100 100">
                        <defs>
                          <path id="circle" d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path>
                        </defs>
                        <text class="round-text">
                          <textPath xlinkHref="#circle">
                            Gurukul Pharma College
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                    <div className="image-homepage mt-4 img-fluid buttonhidden">
                    </div>
                    <div>
                      <p className="mt-3 paragraphhomepage">Gurukul College of Pharmacy managed by Nahar Singh mata Jan vikas sanasthan. The college is endowed with excellent infrastructure, state of the art laboratories and a team of dedicated faculty members with affluent research interests. </p>
                    </div>
                    {/* <div className="mt-3">
                      <button type="button" className="btn button btn-light p-3  ">Play Video </button>

                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="image-homepage2">
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-none d-sm-block d-md-block">
              <Image className="image-homepage3" src={Image1} />
            </div>
          </div>
        </div> */}
        <div className="icon-bar">
          <a href="https://api.whatsapp.com/send?phone=918107973076" className="float whatsapp" target="_blank">
            <Whatsapp className='className="fa fa-whatsapp my-float"'></Whatsapp>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Homepage