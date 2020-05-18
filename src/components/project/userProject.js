import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectItem from './projectItem';
import data from '../../data.json';
import loader from '../../images/load.svg';

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
  const projectData = data.projects;

  // console.log(projectData)

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
                  <h1 className="resume-page-title">projects</h1>

      <AppBar position="static" color="#fff" style={{ boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Web" {...a11yProps(1)} />
          <Tab label="Graphic" {...a11yProps(2)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="row">
          {projectData ? projectData.project_web.map((item, index) => (
            <ProjectItem img={item.image} title={item.title} key={index + 1}/>

          )) : <div className="cart-load"><img src={loader} /></div>}
          {projectData ? projectData.project_graphic.map((item, index) => (
            <ProjectItem img={item.image} title={item.title} key={index + 1}/>

          )) : <div className="cart-load"><img src={loader} /></div>}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="row">
          {projectData ? projectData.project_web.map((item, index) => (
            <ProjectItem img={item.image} title={item.title} key={index + 1}/>

          )) : <div className="cart-load"><img src={loader} /></div>}

        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="row">
          {projectData ? projectData.project_graphic.map((item, index) => (
            <ProjectItem img={item.image} title={item.title} key={index + 1}/>

          )) : <div className="cart-load"><img src={loader} /></div>}

        </div>
      </TabPanel>

    </div>
  );
}
