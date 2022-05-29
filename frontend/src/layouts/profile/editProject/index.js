import { Dialog, DialogContent, DialogTitle, Icon } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";
import { useState } from "react";
import SuiTypography from "components/SuiTypography";
import EventService from "services/EventService";
import JobService from "services/JobService";
import MeetingService from "services/MeetingService";

function EditProject({ id, type, open, handleClose, setRender }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  function onSubmit() {
    const newEvent = { title, description, image: "" };
    if (type === "event") {
      EventService.updateEvent(id, newEvent)
        .then((res) => {
          console.log(res.data);
          setRender();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "meeting") {
      MeetingService.updateMeeting(id, newEvent)
        .then((res) => {
          console.log(res.data);
          setRender();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "job") {
      JobService.updateJob(id, newEvent)
        .then((res) => {
          console.log(res.data);
          setRender();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <SuiTypography>UPDATE POST</SuiTypography>
        <SuiButton
          style={{ margin: 10 }}
          variant="text"
          size="large"
          color="dark"
          onClick={handleClose}
        >
          <Icon>cancel</Icon>
        </SuiButton>
      </DialogTitle>
      <DialogContent>
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
                Update Post
              </SuiButton>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </DialogContent>
    </Dialog>
  );
}

export default EditProject;
