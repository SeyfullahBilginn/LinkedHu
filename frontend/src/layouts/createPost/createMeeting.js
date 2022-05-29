import SuiBox from "components/SuiBox";
import Card from "@mui/material/Card";
import { useState } from "react";

// import SuiTypography from "../../components/SuiTypography/index";
import MeetingService from "services/MeetingService";
import { useAuth } from "contexts/AuthContext";
import SuiInput from "../../components/SuiInput/index";
import SuiButton from "../../components/SuiButton/index";

function CreateMeeting() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const [link, setLink] = useState();

  const { userCookie } = useAuth();

  function onSubmit() {
    MeetingService.postMeeting(title, description, link, userCookie.user.id);
  }

  return (
    <Card>
      <SuiBox pt={2} pb={3} px={3}>
        <SuiBox component="form" role="form">
          <SuiBox mb={2}>
            <SuiInput
              placeholder="aTitle"
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
          <SuiBox mb={2}>
            <SuiInput
              placeholder="Meeting Link"
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </SuiBox>
          <SuiBox mt={4} mb={1}>
            <SuiButton variant="gradient" color="dark" fullWidth onClick={() => onSubmit()}>
              Create Meeting Post
            </SuiButton>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}
export default CreateMeeting;
