import React, { useContext } from "react";
import "../../Style/SidebarLeft.css";
import { Button, Image } from "react-bootstrap";
import LogoIcon from "../../assets/Images/Logo_Icon.png";
import { BiHomeAlt2, BiUser, BiLogIn, BiLogOut } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaFileUpload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import User from "../../assets/Images/User.png";
import AdminForm from "../Admin/AdminForm";
import { UserContext } from "./userContext";

const SidebarLeft = () => {
  const [show, setShow] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [role, setRole] = React.useState("");

  // check for role
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const context = useContext(UserContext);
  const { user, setUser } = context;
  // console.log(user);
  return (
    <div className="d-flex flex-column justify-content-between align-items-center sidebar-left">
      <div className="sidebar-upper text-center">
        <Image src={LogoIcon} className="logo-img" />
        <h4 className="Title">Podcast</h4>
        <nav className="navbar">
          <ul className="d-flex flex-column justify-content-between align-items-center">
            <NavLink to="/dashboard" className="nav-link">
              <BiHomeAlt2 />
              <span className="li-name">Home</span>
            </NavLink>

            {/* <NavLink className="nav-link" to="/dashboard/liked">
              <AiOutlineHeart />
              <span className="li-name">Liked</span>
            </NavLink> */}
            {/* 
            <NavLink to="/dashboard/profile" className="nav-link">
              <BiUser />
              <span className="li-name">Profile</span>
            </NavLink> */}

            {/* <NavLink > */}
            {/* <Button className="nav-link" onClick={handleShow}>
                <FaFileUpload />
                <span className="li-name">Upload</span>
              </Button> */}
            {/* </NavLink> */}
            {user ? (
              user.user.Usertype == "Admin" ? (
                <Button className="nav-link" onClick={handleShow}>
                  <FaFileUpload />
                  <span className="li-name">Upload</span>
                </Button>
              ) : null
            ) : null}

            {isLogin ? (
              <Button className="nav-link">
                <BiLogOut />
                <span className="li-name">LogOut</span>
              </Button>
            ) : (
              <Button className="nav-link">
                <BiLogIn />
                <span className="li-name">LogIn</span>
              </Button>
            )}
          </ul>
        </nav>
      </div>
      <div className="sidebar-footer">
        <NavLink>
          <Image src={User} className="profile-img" />
        </NavLink>
      </div>
      <AdminForm show={show} setShow={handleShow} />
    </div>
  );
};

export default SidebarLeft;
