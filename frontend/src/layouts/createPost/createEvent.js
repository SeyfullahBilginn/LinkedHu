import SuiBox from "components/SuiBox";
import Card from "@mui/material/Card";
import EventService from "services/EventService";
import { useState } from "react";

// import SuiTypography from "../../components/SuiTypography/index";
import SuiInput from "../../components/SuiInput/index";
import SuiButton from "../../components/SuiButton/index";
import { useAuth } from "../../contexts/AuthContext";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const { userCookie } = useAuth();

  function onSubmit() {
    EventService.postEvent(title, description, userCookie.user);
  }

  return (
    <Card>
      <SuiBox pt={2} pb={3} px={3}>
        <SuiBox component="form" role="form">
          <SuiBox mb={2}>
            <SuiInput
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </SuiBox>
          <SuiBox mb={2}>
            <SuiInput
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </SuiBox>
          <SuiBox mt={4} mb={1}>
            <SuiButton variant="gradient" color="dark" fullWidth onClick={() => onSubmit()}>
              Create Event Post
            </SuiButton>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}
export default CreateEvent;
