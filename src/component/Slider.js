import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import slider from '../light.jpeg';
import slider2 from '../slider.png';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    
    imgPath:
    slider
  },
  {
    imgPath:
    slider2,
  },
  {
    imgPath:
    slider,
  },
  {
    imgPath:
    slider2,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: Number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1600, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          bgcolor: 'background.default',
          
        }}
      >
        <Typography spaceBetween={30}>{images[activeStep].label}</Typography>
      </Paper>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: 'block',
                  maxWidth: 1600,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </Box>
  );
}

export default SwipeableTextMobileStepper;