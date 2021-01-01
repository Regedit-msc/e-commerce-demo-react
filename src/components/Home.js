import React from "react";
import Slider from "./Slider";
import "./Home.css";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBContainer,
  MDBFooter,
  MDBIcon,
} from "mdbreact";
import ReactTooltip from 'react-tooltip';
const Home = ({ isCategoryToggled }) => {
  return (
    /* Container */
    <div className="homepage  flex">
      {/* SideBar */}
      <div
        className={
          isCategoryToggled ? " sidenav-mobile" : "sidenav flex-child "
        }
      >
        <h3 style={{ textAlign: "center", color: "black" }}>Categories</h3>
          <div className="sidebar">
                <a data-tip data-for='powertools'>Power Tools</a>
                    <ReactTooltip id='powertools' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipContainer">
                        <ul>
                          <li><a data-tip data-for='marblecutters' href="#">Marble Cutters</a></li>
                          <li><a data-tip data-for='powertoolsaccessories' href="#">Power Tools Accessories</a></li>
                          <li><a data-tip data-for='woodrouters' href="#">Wood Routers</a></li>
                        </ul>
                      </div>
                    } />
                    <ReactTooltip id='marblecutters' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipInnerContainer">
                        <h6 >Shop By Brand</h6>
                        <ul>
                          <li><a href="#">Bosch</a></li>
                          <li><a href="#">ENDICO</a></li>
                          <li><a href="#">Dewart</a></li>
                          <li><a href="#">STANLEY</a></li>
                        </ul>
                        <h6 >Shop By Price</h6>
                        <ul>
                          <li><a href="#">Below 2000</a></li>
                          <li><a href="#">2000-4000</a></li>
                          <li><a href="#">4000-8000</a></li>
                          <li><a href="#">8000-16000</a></li>
                          <li><a href="#">Above 16000</a></li>
                        </ul>
                      </div>
                    } />
          {/* power tools accessories */}
                   <ReactTooltip  id='powertoolsaccessories' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
            getContent={(dataTip) =>
                      <div >
                        <div className="tooltipInnerContainer"  id="poweraccessories">
                          <h6>Shop By Brands</h6>
                          <ul>
                            <li><a href="#">Bosch</a></li>
                            <li><a href="#">Xtra Power</a></li>
                            <li><a href="#">FERM</a></li>
                            <li><a href="#">HITACHI</a></li>
                          </ul>
                          <h6 >Shop By Price</h6>
                          <ul>
                            <li><a href="#">Below 2000</a></li>
                            <li><a href="#">2000-4000</a></li>
                            <li><a href="#">8000-16000</a></li>
                          <li><a href="#">Above 16000</a></li>
                          </ul>
                      </div>
                </div>
                    } />
  {/* wood cutters */}

                             <ReactTooltip  id='woodrouters' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
            getContent={(dataTip) =>
                      <div >
                        <div className="tooltipInnerContainer"  id="woodrouters">
                          <h6>Shop By Brands</h6>
                          <ul>
                            <li><a href="#">Bosch</a></li>
                            <li><a href="#">Xtra Power</a></li>
                            <li><a href="#">FERM</a></li>
                            <li><a href="#">HITACHI</a></li>
                          </ul>
                          <h6 >Shop By Price</h6>
                          <ul>
                            <li><a href="#">Below 2000</a></li>
                            <li><a href="#">2000-4000</a></li>
                            <li><a href="#">8000-16000</a></li>
                          <li><a href="#">Above 16000</a></li>
                          </ul>
                      </div>
                </div>
                    } />
                <a data-tip data-for='pumps'>Pumps</a>
                    <ReactTooltip id='pumps' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipContainer">
                        <ul>
                          <li><a data-tip data-for='domesticpumps' href="#">Domestic Monoblock Pumps</a></li>
                          <li><a data-tip data-for='washingpumps' href="#">Washing Pumps</a></li>
                          <li><a data-tip data-for='coolerpumps' href="#">Cooler Pumps</a></li>
 
                        </ul>
                      </div>
                    } />
          {/* domestic pumps */}

                             <ReactTooltip id='domesticpumps' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div >
                        <div className="tooltipInnerContainer"  id="phoneaccessories">
                          <h6>Shop By Brands</h6>
                          <ul>
                            <li><a href="#">Bosch</a></li>
                            <li><a href="#">Xtra Power</a></li>
                            <li><a href="#">FERM</a></li>
                            <li><a href="#">HITACHI</a></li>
                          </ul>
                          <h6 >Shop By Price</h6>
                          <ul>
                            <li><a href="#">Below 2000</a></li>
                            <li><a href="#">2000-4000</a></li>
                            <li><a href="#">8000-16000</a></li>
                          <li><a href="#">Above 16000</a></li>
                          </ul>
                      </div>
                </div>                    } />
{/* washing pumps */}
             <ReactTooltip id='washingpumps' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div >
                        <div className="tooltipInnerContainer"  id="phoneaccessories">
                          <h6>Shop By Brands</h6>
                          <ul>
                            <li><a href="#">Bosch</a></li>
                            <li><a href="#">Xtra Power</a></li>
                            <li><a href="#">FERM</a></li>
                            <li><a href="#">HITACHI</a></li>
                          </ul>
                          <h6 >Shop By Price</h6>
                          <ul>
                            <li><a href="#">Below 2000</a></li>
                            <li><a href="#">2000-4000</a></li>
                            <li><a href="#">8000-16000</a></li>
                          <li><a href="#">Above 16000</a></li>
                          </ul>
                      </div>
              </div>} />          
          {/* cooler pumps */}
                       <ReactTooltip id='coolerpumps' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div >
                        <div className="tooltipInnerContainer"  id="phoneaccessories">
                          <h6>Shop By Brands</h6>
                          <ul>
                            <li><a href="#">Bosch</a></li>
                            <li><a href="#">Xtra Power</a></li>
                            <li><a href="#">FERM</a></li>
                            <li><a href="#">HITACHI</a></li>
                          </ul>
                          <h6 >Shop By Price</h6>
                          <ul>
                            <li><a href="#">Below 2000</a></li>
                            <li><a href="#">2000-4000</a></li>
                            <li><a href="#">8000-16000</a></li>
                          <li><a href="#">Above 16000</a></li>
                          </ul>
                      </div>
                </div>                    } />
                <a data-tip data-for='accessories'>Accessories</a>
                    <ReactTooltip id='accessories' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipContainer">
                        <ul>
                          <li><a data-tip data-for='phones' href="#">Phones</a></li>
                          <li><a data-tip data-for='laptops' href="#">Laptops</a></li>
                          <li><a data-tip data-for='cars' href="#">Cars</a></li>
                        </ul>
                      </div>
                    } />
                <a data-tip data-for='handtools'>Hand Tools</a>
                    <ReactTooltip id='handtools' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipContainer">
                        <ul>
                          <li><a data-tip data-for='phones' href="#">Spanner</a></li>
                          <li><a data-tip data-for='laptops' href="#">Wrenches</a></li>
                          <li><a data-tip data-for='cars' href="#">Cutting Tools</a></li>
                        </ul>
                      </div>
                    } />
             <a data-tip data-for='safety'>Safety</a>
                    <ReactTooltip id='safety' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipContainer">
                        <ul>
                          <li><a data-tip data-for='phones' href="#">Safety Shoes</a></li>
                          <li><a data-tip data-for='laptops' href="#">Safety Gloves</a></li>
                          <li><a data-tip data-for='cars' href="#">Fire Extinguishers</a></li>
                        </ul>
                      </div>
                    } />
                             <a data-tip data-for='automotive'>Automotive Maintenance</a>
                    <ReactTooltip id='automotive' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipContainer">
                        <ul>
                        <li><a data-tip data-for='phones' href="#">Tryes And Wheels</a></li>
                          <li><a data-tip data-for='cars' href="#">Auto Replacement</a></li>
                          <li><a data-tip data-for='laptops' href="#">Oil & Lubricants</a></li>
                        </ul>
                      </div>
                    } />
                                    {/* <a data-tip data-for='solar'>Solar</a>
                    <ReactTooltip id='solar' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipContainer">
                        <ul>
                          <li><a data-tip data-for='solarcells' href="#">Solar Cells</a></li>
                          <li><a data-tip data-for='solarlanterns' href="#">Solar Lanterns</a></li>
                          <li><a data-tip data-for='aolarfencing' href="#">Solar Fencing</a></li>
                        </ul>
                      </div>
                    } /> */}
                           

          {/* phones */}
            <ReactTooltip id='phones' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
            getContent={(dataTip) =>
              <div >
                <div className="tooltipInnerContainer" id="phoneaccessories">
                  <h6>Shop By Brands</h6>
                  <ul>
                    <li><a href="#">Bosch</a></li>
                    <li><a href="#">Xtra Power</a></li>
                    <li><a href="#">FERM</a></li>
                    <li><a href="#">HITACHI</a></li>
                  </ul>
                  <h6 >Shop By Price</h6>
                  <ul>
                    <li><a href="#">Below 2000</a></li>
                    <li><a href="#">2000-4000</a></li>
                    <li><a href="#">8000-16000</a></li>
                    <li><a href="#">Above 16000</a></li>
                  </ul>
                </div>
              </div>}
            
              />
          {/* laptops */}
            <ReactTooltip id='laptops' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
            <div >
              <div className="tooltipInnerContainer" id="phoneaccessories">
                <h6>Shop By Brands</h6>
                <ul>
                  <li><a href="#">Bosch</a></li>
                  <li><a href="#">Xtra Power</a></li>
                  <li><a href="#">FERM</a></li>
                  <li><a href="#">HITACHI</a></li>
                </ul>
                <h6 >Shop By Price</h6>
                <ul>
                  <li><a href="#">Below 2000</a></li>
                  <li><a href="#">2000-4000</a></li>
                  <li><a href="#">8000-16000</a></li>
                  <li><a href="#">Above 16000</a></li>
                </ul>
              </div>
            </div>
          }/>
          {/* cars */}
          <ReactTooltip id='cars' className="extraClass" delayHide={100}
            arrowColor="transparent"
            delayShow={100}
            delayUpdate={500}
            place={'right'} effect='solid'
            getContent={(dataTip) =>
              <div >
                <div className="tooltipInnerContainer" id="phoneaccessories">
                  <h6>Shop By Brands</h6>
                  <ul>
                    <li><a href="#">Bosch</a></li>
                    <li><a href="#">Xtra Power</a></li>
                    <li><a href="#">FERM</a></li>
                    <li><a href="#">HITACHI</a></li>
                  </ul>
                  <h6 >Shop By Price</h6>
                  <ul>
                    <li><a href="#">Below 2000</a></li>
                    <li><a href="#">2000-4000</a></li>
                    <li><a href="#">8000-16000</a></li>
                    <li><a href="#">Above 16000</a></li>
                  </ul>
                </div>
              </div>}/>
                    <ReactTooltip id='legumes' className="extraClass" delayHide={100}
                    arrowColor="transparent"
                    delayShow={100}
                    delayUpdate={500}
                    place={'right'} effect='solid'
                    getContent={(dataTip) =>
                      <div className="tooltipInnerContainer">
                        <ul>
                          
                          
                          <li><a href="#">Beans</a></li>
                          <li><a href="#">Cowpea</a></li>
                          <li><a href="#">Groundnut</a></li>
                        </ul>
                      </div>
                    } />
                 
            </div>
        

      </div>
      <br />
      {/* Content including footer */}
      <div className="flex-child content main">
        <div className="slider " style={{ width: "auto"}}>
          <Slider />
        </div>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Our bestsellers
          </h2>
          <p className="special-color-text text-center w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Shirt</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="dark-grey-text">
                        Denim shirt{" "}
                        <MDBBadge pill color="danger">
                          NEW
                        </MDBBadge>
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>120$</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="dark-grey-text">
                        Sweatshirt
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="dark-grey-text">
                        Sweatshirt
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="dark-grey-text">
                        Sweatshirt
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="dark-grey-text">
                        Sweatshirt
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="dark-grey-text">
                        Sweatshirt
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>139$</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Sport wear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="dark-grey-text">
                        Grey blouse{" "}
                        <MDBBadge pill color="primary">
                          BEST
                        </MDBBadge>
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>99$</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
              <MDBCard className="align-items-center">
                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Outwear</h5>
                  </a>
                  <h5>
                    <strong>
                      <a href="#!" className="dark-grey-text">
                        Black jacket
                      </a>
                    </strong>
                  </h5>
                  <h4 className="font-weight-bold blue-text">
                    <strong>219$</strong>
                  </h4>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
        {/* Footer */}
        <div className="footer ">
          <MDBFooter color="special-color" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Footer Content</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error nobis obcaecati, quos quia, veniam tempora
                    consequuntur vitae expedita possimus ipsa in excepturi sunt
                    ullam, ipsam quod animi nulla non amet.
                  </p>

                  <MDBCol md="12" className="d-flex justify-content-center">
                    <a href="!#" className="px-2 fa-lg li-ic">
                      <MDBIcon fab icon="linkedin-in"></MDBIcon>
                    </a>

                    <a href="!#" className="px-2 fa-lg tw-ic">
                      <MDBIcon fab icon="twitter"></MDBIcon>
                    </a>

                    <a href="!#" className="px-2 fa-lg fb-ic">
                      <MDBIcon fab icon="facebook-f"></MDBIcon>
                    </a>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="6">
                  <h5 className="title">Links</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">Link 1</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 2</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 3</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://ayfolio.netlify.app"> Regedit </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </div>{" "}
      <br />
    </div>
  );
};

export default Home;