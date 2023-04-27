import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import { BsFullscreenExit, BsGithub } from "react-icons/bs";
import Player from "./Player";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../../Style/DisplayModal.css";

const DisplayModal = (props) => {
  // make api call using id
  console.log(props);
  const [likes, setLikes] = React.useState({});

  const handleLike = (name) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      newLikes[name] = !newLikes[name];
      return newLikes;
    });
  };

  const poster = "https://picsum.photos/id/2/100/100";
  const views = 1000;

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow()}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      className="display-modal"
    >
      <Modal.Header>
        <div className="modal-header-title">
          <p className="title">{props.title}</p>
          <p className="subtitle">{props.subtitle}</p>
        </div>
        <Button onClick={() => props.setShow()}>
          <BsFullscreenExit />{" "}
        </Button>
      </Modal.Header>
      <Modal.Body>
        {props.type === "audio" ? (
          <div className="audio-modal">
            <div className="d-flex align-items-center audio-player">
              <Image src={poster} />
              <div className="audio-info">
                <Player url={props.url} />
              </div>
            </div>
          </div>
        ) : (
          <div className="video-modal">
            <div className="video-container">
              <div className="video-container-left">
                <video controls width={"700px"} autoPlay>
                  <source src={props.url} type="video/mp4" />
                </video>
                <div className="video-info">
                  <div className="left">
                    <p className="title">{props.title}</p>
                    <p className="subtitle">{props.subtitle}</p>
                    {/* <p className="description">{props.description}</p>
                    <p className="author">{props.author}</p>
                    <p className="timestamp">{props.timestamp}</p> */}
                  </div>
                  <div className="right">
                    {likes[props.title] ? (
                      <AiFillHeart onClick={() => handleLike(props.title)} />
                    ) : (
                      <AiOutlineHeart onClick={() => handleLike(props.title)} />
                    )}
                    <p>{views} Views</p>
                  </div>
                </div>
              </div>
              <div className="video-summary">
                {/* <h4>Summary</h4> */}
                <h4>{props.title}</h4>

                <p className="subtitle">{props.subtitle}</p>
                <p className="author">{props.authorName}</p>
                <p className="timestamp">
                  Published:{new Date(props.timestamp).toLocaleDateString()}
                </p>
                {/* <img src={props.poster} alt="" /> */}

                {/* <p className="subtitle"> {props.poster}</p> */}
                <p className="description">{props.description}</p>

                {/* <p className="timestamp">{props.timestamp}</p> */}
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DisplayModal;
