/* eslint-disable no-unused-vars */
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

import ProfileNavbar from "examples/Navbars/ProfileNavbar";

// Images
import pp from "assets/images/pp.jpg";
import backImage from "assets/images/hacettepe.jpg";
import { useEffect, useState } from "react";
// import EditProject from "layouts/profile/editProject";
import UserService from "services/UserService";
import { useAuth } from "contexts/AuthContext";
import SuiButton from "../../../../components/SuiButton/index";
import ConnectionsList from "../../connectionsList";

function Header({ user }) {
  const [open, setOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState();
  const { userCookie } = useAuth();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    UserService.getUser(user.id).then((res) => {
      setUpdatedUser(res.data);
    });
  }, []);

  if (!updatedUser) {
    return <SuiBox>loading</SuiBox>;
  }
  return (
    <SuiBox position="relative">
      <ProfileNavbar absolute light />
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
        <ConnectionsList
          open={open}
          handleClose={handleClose}
          list={updatedUser.friends}
          userId={updatedUser.id}
        />
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
              variant="contained"
              size="medium"
              color="dark"
              onClick={handleClickOpen}
            >
              Connections
            </SuiButton>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
  );
}

export default Header;
