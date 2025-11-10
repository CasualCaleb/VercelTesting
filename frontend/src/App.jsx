import { useState, useRef } from "react";
import { Slider, Typography, Box } from '@mui/material';
import tecca from "/tecca.mp3"
import iphone from "/giphy.gif"
import './App.css';

function App() {

    const [volume, setVolume] = useState(0);
    const audioRef = useRef(new Audio(tecca));

    const handleChange = (_, newValue) => {
        setVolume(newValue);
        audioRef.current.volume = newValue / 100; // volume is 0–1
    };

    audioRef.current.play();

    return (
        <>
            <div className="welcome">
                <h1>Enjoy</h1>
                <img className="iphone" src={iphone}/>
            </div>
            <div className="audio-controls">
                <Box sx={{ p: 10, textAlign: "center" }}>
                    <Typography gutterBottom>Volume</Typography>

                    <audio ref={audioRef} src={tecca} preload="auto" />
                    <img className="audio-symbol" src="/audio.svg" />

                    <Slider
                        value={volume}
                        onChange={handleChange}
                        sx={{
                            filter: 'drop-shadow(0 0 2px #afafaf)',
                            width: 500,
                            color: '#ffffff',
                            '& .MuiSlider-thumb': {
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.2)', // white glow ring
                                },
                                '&::before': {
                                    boxShadow: 'none', // kills MUI's default blue pulse ring
                                },
                            },
                        }}
                    />
                </Box>
            </div>
        </>
    );
}

export default App;