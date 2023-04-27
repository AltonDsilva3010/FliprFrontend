import React, { useState, useEffect, useContext } from "react";
// import "../../Style/SignUp.css";
import axios from "axios";
import PodcastListener from "../../assets/Images/Podcast Listener.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  });
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(
          "https://calm-gray-armadillo-cape.cyclic.app/register",
          formData,
          config
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            setUser(response.data);
            navigate("/dashboard");
          }
        });
    } catch (error) {
      console.log(error);
    }
    setFormData({ username: "", email: "", password: "", dob: "", gender: "" });
  };

  const { username, email, password, dob, gender } = formData;

  const onInputChange = (e) => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleAuth = () => {};

  return (
    <section className="sign-up-form form-div">
      <div className="form-container">
        <form className="signup-container" onSubmit={(e) => onSubmitHandler(e)}>
          <h1>Sign Up For Free to start Listening!</h1>
          <a href="https://calm-gray-armadillo-cape.cyclic.app/api/v1/login/google">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
              style={{ verticalAlign: "middle" }}
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            Signup with Google
          </a>
          <br />
          <h4>OR</h4>

          <div className="form-element">
            <label for="name">Enter your name:</label>
            <br />

            <input
              type="text"
              id="username"
              name="username"
              value={username}
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-element">
            <label for="email">Enter your email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
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
          <br />
          <div className="form-element">
            <label for="dob">What's your birthday?</label>
            <br />
            <input
              type="date"
              id="dob"
              name="dob"
              required=""
              placeholder="DD/MM/YYYY"
              value={dob}
              onChange={(e) => onInputChange(e)}
            />
            {/* <div id="birthday" className="birth-container">
            <label for="birthyear">Year</label>
            <input type="number" placeholder="YYYY" required="" />
            <label for="birth">Month</label>
            <br />
            <select name="birthmonth" id="birthmonth" required="">
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <br />
            <label for="birthyear">Day</label>
            <input type="number" placeholder="DD" required="" />
          </div> */}
          </div>
          <br />
          <div className="form-element-gender">
            <label for="gender">What's your Gender?</label>
            <br />
            <div className="gender-form-element">
              <div className="radio-button">
                <input
                  type="radio"
                  value="male"
                  id="male"
                  name="gender"
                  checked={formData.gender === "male"}
                  onChange={(e) => onInputChange(e)}
                />
                <label for="male">Male</label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  value="female"
                  id="female"
                  name="gender"
                  checked={formData.gender === "female"}
                  onChange={(e) => onInputChange(e)}
                />
                <label for="female">Female</label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  value="nonbinary"
                  id="nonbinary"
                  name="gender"
                  checked={formData.gender === "nonbinary"}
                  onChange={(e) => onInputChange(e)}
                />
                <label for="nonbinary"> Non-binary</label>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
          <br />
          <label for="login">Have an account?</label>
          <a href="/login">Login</a>
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

export default Signup;
