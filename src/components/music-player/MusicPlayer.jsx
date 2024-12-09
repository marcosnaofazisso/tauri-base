import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import React, { useEffect, useRef, useState } from "react";
import { allSongs } from "./musicPlayerHelper";
import { Controls, MusicPlayerContainer, ProgressBar, SongDetails, SongTitleSlider } from "./styles";




export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const audioRef = useRef(null);
    const currentSong = allSongs[currentIndex];

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgress = () => {
        const { currentTime, duration } = audioRef.current;
        setProgress((currentTime / duration) * 100);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % allSongs.length; // Loop to start if at the end
        setCurrentIndex(nextIndex);

        if (isPlaying) {
            // Start playing the next song if currently playing
            setTimeout(() => audioRef.current.play(), 0);
        }
    };

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + allSongs.length) % allSongs.length; // Loop to end if at the start
        setCurrentIndex(prevIndex);

        if (isPlaying) {
            // Start playing the previous song if currently playing
            setTimeout(() => audioRef.current.play(), 0);
        }
    };

    const handleSongEnd = () => {
        handleNext(); // Automatically play the next song
    };

    useEffect(() => {
        if (!isPlaying) {
            // Ensure the new song doesn't play if paused
            audioRef.current.pause();
        }
    }, [currentIndex]);

    return (
        <MusicPlayerContainer>

            <SongDetails isPlaying={isPlaying}>
                <SongTitleSlider>
                    <h3 className="displayNameMp3">{currentSong.displayName}</h3>
                </SongTitleSlider>
                <audio
                    ref={audioRef}
                    src={currentSong.src}
                    onTimeUpdate={handleProgress}
                    onEnded={handleSongEnd}
                />
                <ProgressBar>
                    <div style={{ width: `${progress}%` }} />
                </ProgressBar>
            </SongDetails>

            <Controls>
                <SkipPreviousIcon onClick={handlePrevious} className="icon" />
                {isPlaying ?
                    <PauseIcon className="icon" onClick={togglePlay} />
                    : <PlayArrowIcon className="icon" onClick={togglePlay} />}
                <SkipNextIcon onClick={handleNext} className="icon" />
            </Controls>
        </MusicPlayerContainer>
    );
}
