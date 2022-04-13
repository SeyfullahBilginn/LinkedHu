// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
// Data

import SuiButton from "components/SuiButton";
import { Link } from "react-router-dom";
import profilePostData from "./data/profilePostsData";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SuiBox mb={3}>
        <SuiButton
          style={{ margin: 10 }}
          component={Link}
          to="/to"
          variant="gradient"
          size="small"
          color="info"
        >
          Friends
        </SuiButton>
        <SuiButton
          style={{ margin: 10 }}
          component={Link}
          to="/to"
          variant="gradient"
          size="small"
          color="info"
        >
          Chat
        </SuiButton>
        <SuiButton
          style={{ margin: 10 }}
          component={Link}
          to="/to"
          variant="gradient"
          size="small"
          color="error"
        >
          Logout
        </SuiButton>
        <Card>
          <SuiBox
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            pt={2}
            px={2}
          >
            <SuiBox mb={0.5}>
              <SuiTypography variant="h6" fontWeight="medium">
                Your Posts
              </SuiTypography>
            </SuiBox>
            <SuiButton
              style={{ margin: 10 }}
              component={Link}
              to="/to"
              variant="gradient"
              size="small"
              color="info"
            >
              Add New Post
            </SuiButton>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
              {profilePostData.map((post) => (
                <Grid color="beige" item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    style={{ backgroundColor: "red" }}
                    image={post.image}
                    label={post.label}
                    title={post.title}
                    description={post.description}
                    action={post.action}
                    color="red"
                  />
                </Grid>
              ))}
            </Grid>
          </SuiBox>
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Overview;
