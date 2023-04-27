import React from "react";
import "../../Style/DashboardContent.css";
import { podcastData } from "../PodCastDummyData.jsx";
import PodcastTable from "../Common/PodcastTable";
const Liked = () => {
  const [trendingPodCast, setTrendingPodcast] = React.useState(podcastData);
  return (
    <main className="dashboard-liked-container">
      <h4 className="title">Liked Podcasts</h4>
      <section className="trending-poadcast-table">
        <PodcastTable tableData={trendingPodCast} />
      </section>
      {/* <h4 className="title">Recent Favourite</h4>
      <section className="favourite-cards">
        {podcastData?.map((podcast) => {
          return (
            <PodCastCard
              poster={podcast.image}
              title={podcast.title}
              subtitle={podcast.subtitle}
              align={"vertical"}
            />
          );
        })}
      </section> */}
    </main>
  );
};

export default Liked;
