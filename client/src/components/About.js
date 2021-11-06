import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

export const About = () => (
  <div>
    <div className="container">
        <div className="row">
          <div className="col-lg-6">
            
          </div>
        </div>
    </div>
    <div className="album py-5 bg-white">
      <div className="container">
      <h2 className="text-center"><img src={require('../assets/images/About.png')} width="50%" height="50%" alt="Shopping Cart Header" /></h2>
        <div className="row">
          <div className="col-md-6">
              <div className="card mb-6">
                {/* <h5 className="text-center">About the Owner</h5> */}
                  <p>We believe that good design is powerful, hard work is essential, and exploring the unknown Is Important.</p>             
                
              </div>
          </div>  
          
          <div className="col-md-6">
            <div className="card mb-6">
              <p className="text-center"><br /><img src={require('../assets/images/Felicity.png')} className="text-center border" width="85%" alt="Owner" /><br /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
)