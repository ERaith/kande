import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GoogleForm from './GoogleForm';
import About from './About';
import EventLocation from './EventLocation';
import useWindowSize from "../utils/useWindowSize";
import Lodging from "./Lodging"
import Activities from './Activities';
import Registry from './Registry';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%' }} class="nav-position">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} class="nav" >
        <Tabs value={value} variant="scrollable" onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Event Info" {...a11yProps(0)} />
          <Tab label="RSVP" {...a11yProps(1)} />
          <Tab label="Lodging Information" {...a11yProps(2)} />
          <Tab label="Local Activities" {...a11yProps(3)} />
          <Tab label="Registry" {...a11yProps(4)} />
          <Tab label="About the Couple" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EventLocation/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GoogleForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Lodging/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Activities/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Registry/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <About/>
      </TabPanel>
    </Box>
  );
}
