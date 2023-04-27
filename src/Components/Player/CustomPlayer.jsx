import React from "react";
import "../../Style/CustomPlayer.css";
import { Image } from "react-bootstrap";
import Player from "./Player";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
import DisplayModal from "./DisplayModal";

const CustomPlayer = (props) => {
  const [playerType, setPlayerType] = React.useState();
  const [screenSize, setScreenSize] = React.useState("small");
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setPlayerType("audio");
  }, []);

  const handleFullScreen = () => {
    if (screenSize === "small") {
      setScreenSize("large");
    } else if (screenSize === "large") {
      setScreenSize("small");
    }
  };
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  
  return (
    <>
      <div className="custom-player">
        <Image src={props.poster} className="poster-img" />
        {show !== true ? (
          <BsArrowsFullscreen onClick={handleShow} className="screen-mode" />
        ) : (
          <BsFullscreenExit onClick={handleShow} className="screen-mode" />
        )}
        {playerType === "audio" ? (
          <div className="details">
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            <Player url={props.source} size={screenSize} />
          </div>
        ) : (
          <div className="vedio-details"></div>
        )}
      </div>
      {show && (
        <DisplayModal
          show={show}
          setShow={handleShow}
          type={"video"}
          title={props.title}
          subtitle={props.subtitle}
          url={props.source}
          description={props.description}
          authorName={props.authorName}
          type1={props.type}
          poster={props.poster}
          image = {props.image}
          timestamp={props.timestamp}
        />
      )}
    </>
  );
};

export default CustomPlayer;

