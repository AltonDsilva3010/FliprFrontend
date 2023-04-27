import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Style/Dashboard.css";
import SidebarLeft from "../Common/SidebarLeft";
import SidebarRight from "../Common/SidebarRight";
import DashboardHeader from "./DashboardHeader";

import { Outlet } from "react-router-dom";
const Dashboard = () => {
  //   const [currentTrack, setCurrentTrack] = React.useState();
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <Col md={2} className="sidebar-left-container">
        <SidebarLeft />
      </Col>
      <Col md={7} className="dashboard-main-content">
        <DashboardHeader />
        <Outlet />
      </Col>
      <Col md={3} className="sidebar-right-container">
        <SidebarRight />
      </Col>
    </div>
    // <Container className="d-flex flex-wrap justify-content-between">
    //     <Col md={3} className="sidebar-left">
    //         <h1>LEFT</h1>
    //     </Col>
    //     <Col md={6} className="main-content">
    //     <h1>Main</h1>
    //     </Col>
    //     <Col md={3} className="sidebar-right">
    //     <h1>Right</h1>
    //     </Col>
    // </Container>
  );
};

export default Dashboard;
