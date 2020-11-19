import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import FarmIcon from '../Common/farmIcon'
import CommunityIcon from '../Common/communityIcon'
import BottomDrawer from './BottomDrawer';
import Dashboard from '../Dashboard/Dashboard';
import CommunityFeed from '../Community/CommunityFeed';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
           {props.image? <props.image /> : null}
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(180deg, #3C4142 0%, #5F6769 100%)',
        justifyContent: 'center',
        height: '90vh'
      },
      icon: {
        width: 100,
        height: 100,
      },
      paper: {
          width:'100%',
        color: 'white',
        background: '#3C4142',
      },
      bottombar: {
        height: '10vh',
        position: 'absolute',
        bottom: 0,
        verticalAlign: 'text-bottom'
      }
}));

export default function HomeTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static" color="default" height="100%">
        <Tabs
          value={value}
          onChange={handleChange}
        className={classes.paper}  >
          <Tab icon={<FarmIcon className={classes.icon} homeURL='#'/>} label="//Farming" {...a11yProps(0)} />
          <Tab icon={<CommunityIcon className={classes.icon} homeURL='#'/>} label="//Community" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Dashboard auth={props.auth} store={props.store} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CommunityFeed auth={props.auth} store={props.store} />
        </TabPanel>
      </SwipeableViews>
    </div>
    
    <BottomDrawer className={classes.bottombar} auth={props.auth} store={props.store}></BottomDrawer>
    </div>
  );
}