// @mui material components
import Grid from "@mui/material/Grid";
// import Post from "components/Post";

import SuiBox from "components/SuiBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import JobService from "services/JobService";
import JobPost from "./JobPost";

function Jobs() {
  const [jobs, setJobs] = useState();

  async function getJobs() {
    JobService.getJobs().then((res) => {
      setJobs(res.data);
    });
  }

  useEffect(async () => {
    await getJobs();
  }, []);

  if (!jobs) {
    return (
      <DashboardLayout>
        <div>Loading</div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid item xs={12} lg={15} key={job.id}>
                <JobPost job={job} />
              </Grid>
            ))}
          </Grid>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Jobs;

// {events.map((event) => (
//   <Grid item xs={12} lg={15}>
//     <EventPost
//       title={event.id}
//       description={event.description}
//       image={event.image}
//       userId={event.userId}
//     />
//   </Grid>
// ))}
