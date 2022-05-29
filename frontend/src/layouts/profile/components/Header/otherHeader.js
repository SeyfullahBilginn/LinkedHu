/* eslint-disable no-unused-vars */
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

// Images
import pp from "assets/images/pp.jpg";
import backImage from "assets/images/hacettepe.jpg";
import { useAuth } from "contexts/AuthContext";
import ConnectionService from "services/ConnectionService";
import { useEffect, useState } from "react";
import UserService from "services/UserService";
import { Button } from "@mui/material";
import SuiButton from "../../../../components/SuiButton/index";
import OtherProfileNavbar from "../../../../examples/Navbars/OtherProfileNavbar/index";

function OtherHeader({ user }) {
  const { userCookie } = useAuth();
  const [loggedUser, setLoggedUser] = useState();
  const [friends, setFriends] = useState();
  const [connected, setConnected] = useState();
  useEffect(async () => {
    UserService.getUser(userCookie.user.id).then((res) => {
      setLoggedUser(res.data);
      // eslint-disable-next-line array-callback-return
      res.data.friends.map((item) => {
        if (item.friendId === user.id) {
          setConnected(true);
        }
      });
    });
  }, []);

  function addOrRemoveConnection() {
    setConnected(!connected);
    ConnectionService.getConnection(userCookie.user.id, user.id)
      .then((res) => {
        UserService.getUser(userCookie.user.id).then((result) => {
          setFriends(result.data.friends);
          setLoggedUser(result.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <SuiBox position="relative">
      <OtherProfileNavbar absolute light />
      <SuiBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.1),
              rgba(gradients.info.state, 0.1)
            )}, url(${backImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.4),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid item>
              <SuiAvatar src={pp} alt="profile-image" variant="rounded" size="xxl" shadow="sm" />
            </Grid>
            <Grid item height="100%" lineHeight={1}>
              <SuiBox
                style={{ display: "flex", flexDirection: "row" }}
                height="100%"
                mt={0.5}
                lineHeight={1}
              >
                <SuiTypography variant="h5" fontWeight="medium">
                  {user ? `${user.firstName} -` : "NULL"}
                </SuiTypography>
                <SuiTypography variant="h5" fontWeight="medium">
                  {user ? `- ${user.lastName}` : "NULL"}
                </SuiTypography>
              </SuiBox>
              <SuiTypography variant="button" color="text" fontWeight="medium">
                Student / HU-CS
              </SuiTypography>
            </Grid>
          </Grid>
          <Grid item display="flex" flexDirection="column">
            <SuiButton
              style={{ margin: 10 }}
              to="/to"
              variant={connected ? "contained" : "outlined"}
              size="medium"
              color="dark"
              onClick={() => addOrRemoveConnection()}
            >
              {connected ? "connected" : "connect"}
            </SuiButton>
            <SuiButton
              style={{ margin: 10 }}
              to="/to"
              variant="contained"
              size="medium"
              color="dark"
              onClick={() => addOrRemoveConnection()}
            >
              Message
            </SuiButton>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
  );
}

export default OtherHeader;
