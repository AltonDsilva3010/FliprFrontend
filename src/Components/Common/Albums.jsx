import React from "react";
import { SiGooglepodcasts } from "react-icons/si";
// import { Carousel } from 'react-bootstrap';
import "../../Style/Album.css";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";

const Albums = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // console.log(props.Albums)
  const carousels = props.Albums?.map((album) => {
    return (
      <NavLink
        className="album-container"
        style={{
          background: `linear-gradient(to bottom right, #${Math.floor(
            Math.random() * 16777215
          ).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(
            16
          )})`,
        }}
        to={`/dashboard/podcast/${album.id}`}
      >
        <SiGooglepodcasts className="icon" />
        <div className="album-container-footer">
          <p>Category: {album.title}</p>
        </div>
      </NavLink>
    );
  });
  return (
    <div className="album-carousel">
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {carousels}
      </Carousel>
    </div>
  );
};

export default Albums;
