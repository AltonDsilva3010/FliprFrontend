import React, { useContext } from "react";
import "../../Style/SidebarRight.css";
import axios from "axios";
import PodCastCard from "./PodCastCard";
import CustomPlayer from "../Player/CustomPlayer";
import { CurrentContext } from "./currentContext";

const SidebarRight = () => {
  // api call for next tracks
  const [tracks, setTracks] = React.useState([]);
  const context = useContext(CurrentContext);
  const { currentTrack, setCurrentTrack } = context;

  React.useEffect(() => {
    const getTracks = () => {
      try {
        axios
          .get(
            "https://calm-gray-armadillo-cape.cyclic.app/npodcast/getpodcasts"
          )
          .then((res) => {
            setTracks(res.data.message);
          });
      } catch (error) {
        console.error(error);
      }
    };
    getTracks();
  }, []);

  React.useEffect(() => {
    setCurrentTrack(tracks[Math.floor(Math.random() * tracks.length)]);
  }, [tracks]);

  const nextTracks = tracks?.map((podcast) => {
    return (
      <PodCastCard
        poster={podcast.poster[0].url}
        title={podcast.title}
        subtitle={podcast.subtitle}
        align={"horizontal"}
        VideoUrl={podcast.VideoUrl}
      />
    );
  });
  return (
    <div className="sidebar-right">
      <h4 className="title">Next Podcasts </h4>
      <div className="next-podcasts">{nextTracks}</div>
      {currentTrack && (
        <section className="player-section">
          <CustomPlayer
            poster={currentTrack.poster[0].url}
            title={currentTrack.title}
            subtitle={currentTrack.subtitle}
            description={currentTrack.description}
            authorName={currentTrack.authorName}
            type1={currentTrack.type}
            timestamp={currentTrack.timestamp}
         
            source={currentTrack.VideoUrl}
            // source = {"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"}
          />
        </section>
      )}
    </div>
  );
};

export default SidebarRight;
