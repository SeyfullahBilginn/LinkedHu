// @mui material components
import Grid from "@mui/material/Grid";
import Post from "components/Post";

import SuiBox from "components/SuiBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Events() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={15}>
              <Post />
            </Grid>
            <Grid item xs={12} lg={15}>
              <Post />
            </Grid>
            <Grid item xs={12} lg={15}>
              <Post />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Events;
