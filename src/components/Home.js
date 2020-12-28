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
        <h1 style={{ textAlign: "center", color: "white" }}>Categories</h1>

        <a href="#">Clothes</a>
        <br />
        <a href="#">Bags</a>
        <br />
        <a href="#">Accessories</a>
        <br />
        <a href="#">Food</a>
        <br />
      </div>
      <br />
      {/* Content including footer */}
      <div className="flex-child content main">
        <div className="slider " style={{ width: "auto" }}>
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
