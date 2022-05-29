/* eslint-disable no-unused-vars */
import { Dialog, DialogContent, DialogTitle, Icon } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";
import { useEffect, useState } from "react";
import SuiTypography from "components/SuiTypography";
import EventService from "services/EventService";
import JobService from "services/JobService";
import MeetingService from "services/MeetingService";
import UserService from "services/UserService";

function ConnectionsList({ open, handleClose, list, userId }) {
  const [friends, setFriends] = useState([]);

  async function fetchFriends() {
    setFriends([]);
    // eslint-disable-next-line array-callback-return
    list.map((item) => {
      UserService.getUser(item.friendId).then((res) => {
        const data = {
          id: res.data.id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
        };
        setFriends((old) => [...old, data]);
      });
    });
  }

  useEffect(async () => {
    await fetchFriends();
  }, []);

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
        <SuiTypography>Connections List</SuiTypography>
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
          {friends.map((friend) => (
            <SuiBox key={friend.id}>
              {friend.firstName} {friend.lastName}
            </SuiBox>
          ))}
        </SuiBox>
      </DialogContent>
    </Dialog>
  );
}

export default ConnectionsList;
