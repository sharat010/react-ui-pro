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
          <TabList onChange={handleChange} aria-label="lab API tabs example" className='tabs'>
            <Tab label="Featured" className='tabButton1 border-img'  value="1" size={"small"} />
            <Tab label="All" value="2" className='tabButton' size={"small"} />
          </TabList>
        </Box>
        <TabPanel value="1"><Slider/></TabPanel>
        <TabPanel value="2"><SliderAft/></TabPanel>
      </TabContext>
    </Box>
  );
}
