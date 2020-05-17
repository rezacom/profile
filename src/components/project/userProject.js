import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectItem from './projectItem';
import projectImage from '../../images/project1.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#fff" style={{boxShadow: 'none'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="row">
            <ProjectItem img={projectImage} title="first project"/>
            <ProjectItem img={projectImage} title="first project"/>
            <ProjectItem img={projectImage} title="first project"/>
            <ProjectItem img={projectImage} title="first project"/>
            
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="row">
        <ProjectItem img={projectImage} title="first project"/>
        <ProjectItem img={projectImage} title="first project"/>
            
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="row">
        <ProjectItem img={projectImage} title="first project"/>
        <ProjectItem img={projectImage} title="first project"/>
        <ProjectItem img={projectImage} title="first project"/>
            
        </div>
      </TabPanel>
    
    </div>
  );
}
