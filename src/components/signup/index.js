import React,{useState, useEffect} from "react";
import validateInfo from "../../validate";
import UseForms from "../../hooks/forms";
import { Form, Button } from "react-bootstrap";
import { BsBriefcase, BsFillShieldLockFill, BsFillPersonFill } from "react-icons/bs";
import { Footer } from "../footer";
import axios from "axios";






const SignUp = ({ submitForm}) => {
  const { handleSubmit, errors, handleChange, values } = UseForms(
    submitForm,
    validateInfo
  );

  
  


  return (
    <div>
      <h1 className="site-name"> Welcome to SHOParound.com</h1>
      <div className="container">
        {/* SIGN IN SECTION */}
        <div className="sign-up">
          <Form onSubmit={handleSubmit} noValidate>
          <div>
              <span className="sign-in-icon"> {<BsFillPersonFill />}</span>
              <input
                value={values.userName}
                onChange={handleChange}
                className={errors.userName ? "error signup-form" : "signup-form"}
                type="userName"
                name="userName"
                id="userName"
                placeholder="Enter your name"
              />
              {errors.userName && <p className="error">{errors.userName}</p>}
            </div>
            <br />
            <div>
              <span className="sign-in-icon"> {<BsBriefcase />}</span>
              <input
                value={values.email}
                onChange={handleChange}
                className={errors.email ? "error signup-form" : "signup-form"}
                type="email"
                name="email"
                id="email"
                placeholder="Enter e-mail"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <br />
            <div>
              <span className="sign-in-icon">
                <BsFillShieldLockFill />
              </span>
              <input
                value={values.password}
                onChange={handleChange}
                className={
                  errors.password ? "error signup-form" : "signup-form"
                }
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <br />
            <div>
              <span className="sign-in-icon">
                <BsFillShieldLockFill />
              </span>
              <input
                value={values.password2}
                onChange={handleChange}
                className={
                  errors.password2 ? "error signup-form" : "signup-form"
                }
                type="password"
                name="password2"
                id="password2"
                placeholder="Re-Enter Password"
              />
              {errors.password2 && <p className="error">{errors.password2}</p>}
            </div>
            <h3 className="new-to-alibaba">New to Shop around?</h3>
            <Button
              type="submit"
              className="signup-button"
              style={{ fontSize: "11px" }}
            >
              Create your SHOParound account
            </Button>
          </Form>
        </div>
      </div>
      {/* BOTTOM SECTION */}
          <Footer/>  
    </div>
  );
};



export default SignUp;
