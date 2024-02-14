import * as React from 'react';
import Box from '@mui/system/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from '@mui/material';
import Slider from './Slider';
import SliderAft from './SliderAft';

export default function TabButtons() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" className='tabButton1'  value="1" />
            <Tab label="Item Two" value="2" className='tabButton' />
          </TabList>
        </Box>
        <TabPanel value="1"><Slider/></TabPanel>
        <TabPanel value="2"><SliderAft/></TabPanel>
      </TabContext>
    </Box>
  );
}
