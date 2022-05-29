/* eslint-disable no-unneeded-ternary */
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

import SuiBox from "components/SuiBox";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/illustrations/hacettepe.jpg";
import { useAuth } from "contexts/AuthContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

function SignUp() {
  const [firstName, setFirstName] = useState("aaaa");
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // eslint-disable-next-line no-unused-vars
  const [role, setRole] = useState(0);
  const { signUp } = useAuth();

  function onSubmit() {
    console.log("signup");
    signUp({
      firstName,
      lastName,
      email,
      password,
      role,
    });
  }

  return (
    <BasicLayout
      title="Welcome!"
      description="Link to your friends, academicians, graduates"
      image={curved6}
    >
      <Card>
        <SuiBox pt={2} pb={3} px={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </SuiBox>
            <Separator text="sign up as a " />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={role === 0 ? true : false} />}
                onClick={() => setRole(0)}
                label="Student"
              />
              <FormControlLabel
                control={<Checkbox checked={role === 1 ? true : false} />}
                onClick={() => setRole(1)}
                label="Academician"
              />
              <FormControlLabel
                control={<Checkbox checked={role === 2 ? true : false} />}
                onClick={() => setRole(2)}
                label="Graduate"
              />
            </FormGroup>
            <SuiBox mt={4} mb={1}>
              <SuiButton variant="gradient" color="dark" fullWidth onClick={() => onSubmit()}>
                sign up
              </SuiButton>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
