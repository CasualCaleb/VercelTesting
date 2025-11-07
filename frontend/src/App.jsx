import { Slider, Typography, Box } from '@mui/material';

function App() {
    return (
        <div style={{ padding: 200, width: 500 }}>
            <Box sx={{ p: 10 }}>
                <Typography gutterBottom>Volume</Typography>
                <Slider
                    defaultValue={30}
                    sx={{
                        filter: 'drop-shadow(0 0 2px #afafaf)',
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
    );
}

export default App;