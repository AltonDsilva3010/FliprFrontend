import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../../Style/DisplayPodcast.css"
import NotFound from "../../assets/Images/NotFound.svg"
import PodcastTable from '../Common/PodcastTable'
import { Image } from 'react-bootstrap'
const DisplayPodcasts = () => {
  const urlparams = useParams()
  console.log(urlparams.name)
  const [podcasts, setPodcast] = React.useState([])
  const [isLoading, setIslodding] = React.useState(false)
  React.useEffect(() => {
    const getAllPodcast = () => {
      // console.log("Calling...");
      setIslodding(true)
      try {
        axios
          .get(`http://localhost:3000/npodcast/categories/${urlparams.name}`)
          .then((res) => {
              setPodcast(res.data.message)
              setIslodding(false)
            });
        // console.log("RES",response);
      } catch (error) {
        console.error(error);
        setIslodding(false)
      }
      
    }
    getAllPodcast()
  }, [])

  return (
    <div className='displayPodcast'>
      <h1 className='title'>{urlparams.name}</h1>

      {
        !isLoading ?
          podcasts.length > 0 ?
            <PodcastTable
              tableData={podcasts}
            />
            :
            <div className='no-display-data'>
              <Image src={NotFound} />
            </div>
          :
          <div class="custom-spiner spinner-border" role="status"></div>
      }
    </div>
  )
}

export default DisplayPodcasts