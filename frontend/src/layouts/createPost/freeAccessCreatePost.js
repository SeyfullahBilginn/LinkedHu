import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import colors from "assets/theme/base/colors";
import { AppBar } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import VideocamIcon from "@mui/icons-material/Videocam";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar/index";
import CreateEvent from "./createEvent";
import CreateJob from "./createJob";
import CreateMeeting from "./createMeeting";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FreeAccessCreatePost() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box sx={{ width: "100%" }}>
        <AppBar position="static">
          <Tabs
            orientation={tabsOrientation}
            value={value}
            onChange={handleChange}
            sx={{
              backgroundColor: colors.badgeColors.secondary.background,
            }}
            aria-label="basic tabs example"
          >
            <Tab label="Job" {...a11yProps(0)} icon={<WorkIcon />} />
            <Tab label="Meeting" {...a11yProps(1)} icon={<VideocamIcon />} />
            <Tab label="Event" {...a11yProps(2)} icon={<EventIcon />} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CreateJob />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CreateMeeting />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CreateEvent />
        </TabPanel>
      </Box>
    </DashboardLayout>
  );
}
