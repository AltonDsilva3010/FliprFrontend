import React, { useState, useContext } from "react";
import "../../Style/Signup.css";
import axios from "axios";
import PodcastListener from "../../assets/Images/Podcast Listener.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const googlesignin = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    try {
      fetch(
        "https://calm-gray-armadillo-cape.cyclic.app/api/v1/login/google",
        config
      ).then((response) => {
        localStorage.setItem("User", JSON.stringify(response.data));
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      axios
        .post(
          "https://calm-gray-armadillo-cape.cyclic.app/login",
          formData,
          config
        )
        .then((response) => {
          localStorage.setItem("User", JSON.stringify(response.data));
          console.log(response);
          if (response.status == 200) {
            console.log(response.data);
            setUser(response.data);
            navigate("/dashboard");
          }
        });
    } catch (error) {
      console.log(error);
    }
    setFormData({ username: "", password: "" });
  };

  const { username, password } = formData;

  const onInputChange = (e) => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="sign-up-form form-div">
      <div className="form-container">
        <form className="signup-container" onSubmit={(e) => onSubmitHandler(e)}>
          <h1>Login to start Listening!</h1>{" "}
          <button type="button" onClick={(e) => googlesignin(e)}>
            Sign Up
          </button>
          <br />
          <h4>OR</h4>
          <div className="form-element">
            <label for="username">Enter your username:</label>
            <br />
            <input
              type="username"
              id="username"
              name="username"
              value={username}
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-element">
            <label for="password">Enter your password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit">Submit</button>
          <br />
          <label for="signup">Don't have an account?</label>
          <a href="/signup">SignUp</a>
        </form>
      </div>
      <div className="side-container">
        <div className="side-content">
          <h1>A quick and easy way to listen to most favorite podcasts!</h1>
          <img src={PodcastListener} alt="" />
          <h3>
            Explore latest top-notch stories from world wide community and
            verified creators
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Login;
