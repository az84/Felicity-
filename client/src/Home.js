import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <div>
      <img src={require('./assets/images/homepage.jpg')} width="100%" height="100%" alt="Interior storefront view" />
    </div>
    <div className="album py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/Accessories" >
              <div className="card mb-4 shadow-sm">
                <img src={require('./assets/images/Accessories.png')} width="100%" height="100%" alt="Retro flower earrings"
                 />
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/Apparel">
            <div className="card mb-4 shadow-sm">
              <img src={require('./assets/images/Apparel.png')} width="100%" height="100%" alt="Red and white shirt" />
            </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/Bags">
            <div className="card mb-4 shadow-sm">
              <img src={require('./assets/images/Bags.png')} width="100%" height="100%" alt="Orange bag product" />
            </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/Beauty">
            <div className="card mb-4 shadow-sm">
              <img src={require('./assets/images/Beauty.png')} width="100%" height="100%" alt="Beauty care spray bottle" />
            </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/HomeDecor">
            <div className="card mb-4 shadow-sm">
              <img src={require('./assets/images/HomeDecor.png')} width="100%" height="100%" alt="Retro chair and pillow combo" />
            </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/ShopAll">
              <div className="card mb-4 shadow-sm">
                <a href="/ShopAll"><img src={require('./assets/images/ShopAll.png')} width="100%" height="100%" alt="Yellow shirt" /></a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center bg-white">
      <h2 position-center> Latest Products </h2>
      <Carousel>
        <Carousel.Item>
          <a href=""><img
            className="d-block w-100"
            src={require('./assets/images/handmadeQuilt.jpeg')}
            alt="Handmade Quilt"
          /> </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href=""><img
            className="d-block w-100"
            src={require('./assets/images/colorWall.jpg')}
            alt="Wall Painting"
          /> </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href=""><img
            className="d-block w-100"
            src={require('./assets/images/Vase.jpg')}
            alt="Vase"
          /></a>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>

)

