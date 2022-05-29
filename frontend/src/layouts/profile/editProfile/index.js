import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useState } from "react";
import SuiBox from "components/SuiBox";
import Card from "@mui/material/Card";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import { useAuth } from "contexts/AuthContext";
import UserService from "services/UserService";
import { useNavigate } from "react-router-dom";
import SuiTypography from "components/SuiTypography";

function EditProfile() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const { userCookie, updateUserCookie } = useAuth();
  const navigate = useNavigate();

  function onSubmit() {
    const newUser = { firstName, lastName };
    UserService.updateUser(userCookie.user.id, newUser)
      .then((res) => {
        updateUserCookie(res.data);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SuiBox pt={2} pb={3} px={3}>
          <SuiTypography
            fontWeight="bold"
            textTransform="uppercase"
            verticalAlign="top"
            color="dark"
            display="flex"
            justifyContent="center"
          >
            Update Profile
          </SuiTypography>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput
                placeholder="New First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                placeholder="New Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton variant="gradient" color="dark" fullWidth onClick={() => onSubmit()}>
                Update Profile
              </SuiButton>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </Card>
    </DashboardLayout>
  );
}

export default EditProfile;
