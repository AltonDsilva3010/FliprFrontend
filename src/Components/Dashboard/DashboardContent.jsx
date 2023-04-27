import React, { useEffect } from "react";
import "../../Style/DashboardContent.css";
import Albums from "../Common/Albums";
import PodcastTable from "../Common/PodcastTable";
import { podcastData } from "../PodCastDummyData.jsx";
import PodCastCard from "../Common/PodCastCard";
import axios from "axios";
import Carousel from "react-multi-carousel";
const DashboardContent = () => {
  // api call for list of albums , podcast
  const [trendingPodCast, setTrendingPodcast] = React.useState(podcastData);
  const [trendingAudioPodCast, setTrendingAudioPodcast] = React.useState([]);
  const [trendingVideoPodCast, setTrendingVideoPodcast] = React.useState([]);
  const [allPodCast, setAllPodCast] = React.useState([]);
  useEffect(() => {
    const getAudioPodcasts = () => {
      axios
        .get("https://calm-gray-armadillo-cape.cyclic.app/npodcast/getaudio")
        .then((response) => {
          console.log(response.data.message);
          setTrendingAudioPodcast(response.data.message);
        });
    };
    const getVideoPodcasts = () => {
      axios
        .get("https://calm-gray-armadillo-cape.cyclic.app/npodcast/getvideo")
        .then((response) => {
          // console.log(response.data.message);
          setTrendingVideoPodcast(response.data.message);
        });
    };
    getAudioPodcasts();
    getVideoPodcasts();
  }, []);

  React.useEffect(() => {
    const getAllPodcast = () => {
      try {
        axios
          .get(
            "https://calm-gray-armadillo-cape.cyclic.app/npodcast/getpodcasts"
          )
          .then((res) => setAllPodCast(res.data.message));
        // console.log("RES",response);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPodcast();
  }, []);
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

  const AlbumName = [
    { id: "Fitness", title: "Fitness" },
    { id: "Entertainment", title: "Entertainment" },
    { id: "Business", title: "Business And Entrepreneurship" },
    { id: "Spiritual", title: "Spiritual" },
    { id: "Music", title: "Music" },
    { id: "News_Politics", title: "News And Politics" },
    { id: "Sports", title: "Sports" },
    { id: "Society_Culture", title: "Society And Culture" },
    { id: "True_Crime_Mystery", title: "True Crime And Mystery" },
    { id: "Horror", title: "Horror" },
    { id: "Science_Technology", title: "Science And Technology" },
    { id: "Education", title: "Education" },
  ]
  // console.log("ALL PODCASR",allPodCast[0].poster[0].url)
  return (
    <main className="dashboard-content-container">
      <h4 className="title">Listed Categories Of Podcast</h4>
      <Albums Albums={AlbumName} />
      <h4 className="title">Trending Audio Podcasts</h4>
      <section className="trending-poadcast-table">
        <PodcastTable tableData={trendingAudioPodCast} />
      </section>
      <h4 className="title">Trending Video Podcasts</h4>
      <section className="trending-poadcast-table">
        <PodcastTable tableData={trendingVideoPodCast} />
      </section>
      <h4 className="title">Recent Favourite</h4>
      <section className="favourite-cards">
        <Carousel
          responsive={responsive}
          // autoPlaySpeed={2000}
          infinite={true}
          autoPlay={true}
        >
          {allPodCast?.map((podcast) => {
            return (
              <PodCastCard
                poster={podcast.poster}
                title={podcast.title}
                subtitle={podcast.subtitle}
                align={"vertical"}
                VideoUrl={podcast.VideoUrl}
              />
            );
          })}
        </Carousel>
      </section>
    </main>
  );
};

export default DashboardContent;
