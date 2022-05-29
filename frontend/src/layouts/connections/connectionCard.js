// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

// Images
import pp from "assets/images/pp.jpg";
import Button from "@mui/material/Button";
// import UserService from "services/UserService";

function ConnectionCard({ user }) {
  return (
    <Card>
      <SuiBox variant="gradient">
        <SuiBox p={2}>
          <Grid container alignItems="center">
            <Button href={`/connections/${user.id}`}>
              <Grid item>
                <SuiBox
                  variant="gradient"
                  bgColor="red"
                  color="dark"
                  width="3rem"
                  height="3rem"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  <SuiAvatar src={pp} alt="profile-image" variant="rounded" size="xl" shadow="sm" />
                </SuiBox>
              </Grid>
              <Grid item xs={8}>
                <SuiBox ml={2} lineHeight={1}>
                  <SuiTypography
                    variant="h6"
                    color="dark"
                    opacity={1}
                    textTransform="capitalize"
                    fontWeight="bold"
                  >
                    {user.firstName}-{user.lastName}
                  </SuiTypography>
                </SuiBox>
              </Grid>
            </Button>
          </Grid>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default ConnectionCard;
