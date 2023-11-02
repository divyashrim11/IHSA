import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Tabs, Tab } from "react-bootstrap";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { Link } from "react-router-dom";
import Fblogin from "../components/auth/fblogin";
import Google from "../components/auth/google";
import "./pages.css";

const SignInPage = () => {
  return (
    <div className="container-fluid layout-sec m-0 p-0">
      <div className="row m-0 p-0">
        <div className="col p-0 m-0">
          <div className="main-wrapper">
            <Link to="/">
              <img src="assets/logo.png"/>
            </Link>

            <div className="form-wrapper">
              <Tabs defaultActiveKey="signin" id="sign">
                <Tab eventKey="signin" title="Sign in">
                  <SignIn></SignIn>
                  <div className="d-flex align-items-end mt-3">
                    <p className="m-0">Or Sign in with</p>

                    <Google></Google>
                  </div>
                </Tab>
                <Tab eventKey="signup" title="Sign up" id="signup">
                  <SignUp></SignUp>
                  <div className="d-flex align-items-end mt-3">
                    <p className="m-0">Or Sign up with</p>
                    <Google></Google>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div id="main" className="col-md-7 p-0 m-0">
        <Carousel showThumbs={false} autoPlay="false">
            <div>
              <img src="../assets/slider-1.png" alt="slide" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
