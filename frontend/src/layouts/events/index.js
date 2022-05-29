// @mui material components
import Grid from "@mui/material/Grid";
// import Post from "components/Post";

import SuiBox from "components/SuiBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import EventService from "services/EventService";
import EventPost from "./EventPost";

function Events() {
  const [events, setEvents] = useState();

  async function getEvents() {
    EventService.getEvents().then((res) => {
      setEvents(res.data);
    });
  }

  useEffect(async () => {
    await getEvents();
  }, []);

  if (!events) {
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
            {events.map((event) => (
              <Grid item xs={12} lg={15} key={event.id}>
                <EventPost event={event} />
              </Grid>
            ))}
          </Grid>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Events;
