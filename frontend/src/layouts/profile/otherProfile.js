// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import UserService from "services/UserService";
import OtherHeader from "./components/Header/otherHeader";
import NonLoggedProjectCard from "../../examples/Cards/NonLoggedProjectCard.js/index";

function OtherProfile() {
  const location = useLocation();
  const id = location.pathname.split("/").at(2);
  const [user, setUser] = useState();
  const [userPosts, setUserPosts] = useState();

  function fetchUserPosts(data) {
    UserService.getUserPosts(data.id)
      .then((res) => {
        setUserPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(async () => {
    UserService.getUser(id).then((res) => {
      setUser(res.data);
      fetchUserPosts(res.data);
    });
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
      <OtherHeader user={user} />
      <SuiBox mb={3} mt={2}>
        <Card>
          <SuiBox
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            pt={2}
            px={2}
          >
            <SuiBox mb={0.5}>
              <SuiTypography variant="h6" fontWeight="medium">
                Posts
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
              {userPosts.map((post, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid color="beige" item xs={12} md={6} xl={3} key={index}>
                  <NonLoggedProjectCard
                    style={{ backgroundColor: "red" }}
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

export default OtherProfile;
