import React, { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Image, Button } from "react-bootstrap";
import { CurrentContext } from "./currentContext";
const PodCastCard = (props) => {
  // console.log(props);
  const context = useContext(CurrentContext);
  const { currentTrack, setCurrentTrack } = context;
  const handleClick = (newprops) => {
    // console.log(newprops);
    setCurrentTrack(newprops);
  };

  return (
    <div
      className={`podcast-card podcast-card-${props.align}`}
      onClick={() => handleClick(props)}
    >
      <Image src={props.poster[0].url} className="poster" />
      <div className="details">
        <p className="title">{props.title}</p>
        <p className="subtitle">{props.subtitle}</p>
      </div>
      {props.align === "horizontal" && (
        <Button className="dots-btn">
          <BsThreeDotsVertical />
        </Button>
      )}
    </div>
  );
};

export default PodCastCard;
