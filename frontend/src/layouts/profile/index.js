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
import Icon from "@mui/material/Icon";
import UserService from "services/UserService";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Overview() {
  const { userCookie } = useAuth();
  const [userPosts, setUserPosts] = useState();
  function fetchUserPosts() {
    UserService.getUserPosts(userCookie.user.id)
      .then((res) => {
        setUserPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(async () => {
    await fetchUserPosts();
  }, []);

  if (!userPosts) {
    return (
      <DashboardLayout>
        <div>LOADING</div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <Header user={userCookie.user} other={false} />
      <SuiBox mb={3} mt={2}>
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
              to="/create-new-post"
              variant="gradient"
              size="medium"
              color="info"
            >
              <Icon>add</Icon>
            </SuiButton>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
              {userPosts.map((post, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid color="beige" item xs={12} md={6} xl={3} key={index}>
                  <DefaultProjectCard
                    style={{ backgroundColor: "red" }}
                    type={post.type}
                    id={post.id}
                    image={post.image}
                    label="LABEL"
                    title={post.title}
                    description={post.description}
                    action="hef"
                    actionType="internal"
                    actionRoute={`/${post.type}s/${post.id}`}
                    color="info"
                    actionLabel="view project"
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
