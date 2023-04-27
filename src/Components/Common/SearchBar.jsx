import { useState, useContext } from "react";
import { Form, FormControl, Image } from "react-bootstrap";
import User from "../../assets/Images/User.png";
import CustomDropDown from "./CustomDropDown";
import { UserContext } from "./userContext";
import axios from "axios";
import "../../Style/style.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/dashboard/search/${searchTerm}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit(event);
    }
  };
  let DropDownList;
  if (user) {
    DropDownList = [
      {
        title: "Log Out",
        id: "logOut",
        route: "/",
      },
      {
        title: "Profile",
        id: "profile",
        route: "/dashboard/profile",
      },
    ];
  } else {
    DropDownList = [
      {
        title: "Log In",
        id: "logIn",
        route: "/login",
      },
      {
        title: "Profile",
        id: "profile",
        route: "/dashboard/profile",
      },
    ];
  }

  const handleDropDownClick = (li) => {
    console.log(l1);
  };
  return (
    <div className="d-flex align-items-center justify-content-between search-bar">
      <Form
        inline={"true"}
        onSubmit={(e) => handleSumbmit(e)}
        className="w-100"
      >
        <FormControl
          type="text"
          placeholder="Search By Authors Name"
          className=" search-input"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Form>
      <div className="d-flex align-items-center user-badge">
        <img
          src={User}
          className="profile"
          style={{ width: "40px", height: "auto" }}
        />
        <CustomDropDown
          userName={"Harshang"}
          dropList={DropDownList}
          handleClick={handleDropDownClick}
        />
      </div>
    </div>
  );
}
export default SearchBar;
