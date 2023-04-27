import React, { useContext } from "react";
import { Table, Image } from "react-bootstrap";
import "../../Style/PodcastTable.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CurrentContext } from "./currentContext";
const PodcastTable = (props) => {
  const context = useContext(CurrentContext);
  const { currentTrack, setCurrentTrack } = context;
  const [likes, setLikes] = React.useState({});

  const handleOnClick = (d) => {
    // console.log(d);
    setCurrentTrack(d);
  };

  const handleLike = (name) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      newLikes[name] = !newLikes[name];
      return newLikes;
    });
  };
  const header = props.headers?.map((hd) => {
    return <th className="t-header c-white">{hd}</th>;
  });

  const body = props.tableData?.map((d, index) => {
    return (
      <tr className="t-row" onClick={() => handleOnClick(d)}>
        <td className="index">{index}</td>
        <td className="podcast-img">
          <Image src={d.poster[0].url} />
        </td>
        <td className="podcast-info">
          <p className="title">{d.title}</p>
          <p>{d.subtitle}</p>
        </td>
        <td className="podcast-duration">{d.duration}</td>
        <td className="podcast-views">{d.views}</td>
        <td className="podcast-like-btn">
          {likes[d.name] ? (
            <AiFillHeart onClick={() => handleLike(d.name)} />
          ) : (
            <AiOutlineHeart onClick={() => handleLike(d.name)} />
          )}
        </td>
      </tr>
    );
  });

  return (
    <div className="custom-table">
      <Table responsive>
        {/* <thead>
                    {header}
                </thead> */}
        <tbody>{body}</tbody>
      </Table>
    </div>
  );
};

export default PodcastTable;
