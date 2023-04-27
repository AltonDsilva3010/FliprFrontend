import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../Style/DashboardContent.css";
import PodcastTable from "./PodcastTable";

const SearchedPodcast = () => {
  const searchParams = useParams();
  const [searchItem, setSearchItem] = useState();
  let searchTerm = searchParams.search;
  useEffect(() => {
    try {
      axios
        .get("https://calm-gray-armadillo-cape.cyclic.app/npodcast/searchbar", {
          params: {
            q: searchTerm,
          },
        })
        .then((response) => {
          console.log(response.data.message);
          if (response.data.message.length > 0) {
            setSearchItem(response.data.message);
          } else {
            setSearchItem();
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Searched Results:</h1>
      {searchItem ? (
        <>
          <section className="trending-poadcast-table">
            <PodcastTable tableData={searchItem} />
          </section>
        </>
      ) : (
        <div>
          <h2>Not Found</h2>
        </div>
      )}
    </div>
  );
};

export default SearchedPodcast;
