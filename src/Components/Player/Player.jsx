import React from 'react'
import { BsPauseFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import "../../Style/Player.css"

const Player = (props) => {


    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const audioRef = React.createRef();
    React.useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleTimeSliderChange = (event) => {
        const { value } = event.target;
        setCurrentTime(value);
        audioRef.current.currentTime = value;
    };
    
    return (    
        <div className='player-container'>
            <audio
                ref={audioRef}
                src={props.url}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
            <button onClick={togglePlay} className='player-btn-section'>{isPlaying ? <BsPauseFill /> : <FaPlay />}</button>

            <div className='player-info'>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleTimeSliderChange}
                    disabled
                />
                <span >{currentTime.toFixed(2)} /  {duration.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Player