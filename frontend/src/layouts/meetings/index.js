// @mui material components
import Grid from "@mui/material/Grid";
// import Post from "components/Post";

import SuiBox from "components/SuiBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import MeetingService from "services/MeetingService";
import MeetingPost from "./MeetingPost";

function Meetings() {
  const [meetings, setMeetings] = useState();

  async function getMeetings() {
    MeetingService.getMeetings().then((res) => {
      setMeetings(res.data);
    });
  }

  useEffect(async () => {
    await getMeetings();
  }, []);

  if (!meetings) {
    return (
      <DashboardLayout>
        <div>LOADING</div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            {meetings.map((meeting) => (
              <Grid item xs={12} lg={15} key={meeting.id}>
                <MeetingPost meeting={meeting} />
              </Grid>
            ))}
          </Grid>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Meetings;
