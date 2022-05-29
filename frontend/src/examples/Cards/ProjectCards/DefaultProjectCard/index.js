// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import Icon from "@mui/material/Icon";
import { useEffect, useState } from "react";
import EditProject from "layouts/profile/editProject";
import JobService from "services/JobService";
import EventService from "services/EventService";
import MeetingService from "services/MeetingService";

function DefaultProjectCard({
  type,
  id,
  image,
  title,
  description,
  actionType,
  actionRoute,
  color,
  actionLabel,
}) {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [render, setRender] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("---");
  }, [render]);

  function stateToProp() {
    console.log("STATE TO PROP");
    setRender(render + 1);
  }

  function deletePost() {
    if (type === "job") {
      JobService.deleteJob(id)
        .then((res) => {
          console.log(res);
          console.log("Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "event") {
      EventService.deleteEvent(id)
        .then((res) => {
          console.log(res);
          console.log("Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "meeting") {
      MeetingService.deleteMeeting(id)
        .then((res) => {
          console.log(res);
          console.log("Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "RGB(240,250,250)",
        padding: 2,
        boxShadow: "none",
        overflow: "",
      }}
    >
      <EditProject
        id={id}
        type={type}
        open={open}
        handleClose={handleClose}
        setRender={() => stateToProp()}
      />
      <SuiBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </SuiBox>
      <SuiBox pt={3} px={0.5}>
        <SuiBox mb={1}>
          {actionType === "internal" ? (
            <SuiTypography variant="h5" textTransform="capitalize">
              {title}
            </SuiTypography>
          ) : (
            <SuiTypography
              component="a"
              href={actionRoute}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </SuiTypography>
          )}
        </SuiBox>
        <SuiBox mb={3} lineHeight={0}>
          <SuiTypography variant="button" fontWeight="regular" color="text">
            {description}
          </SuiTypography>
        </SuiBox>
        <SuiBox
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <SuiBox>
            <SuiButton
              style={{ margin: 2 }}
              component={Link}
              to={actionRoute}
              variant="outlined"
              size="medium"
              color={color}
            >
              {actionLabel}
            </SuiButton>
          </SuiBox>
          <SuiBox>
            <SuiButton
              style={{ margin: 2 }}
              variant="contained"
              size="medium"
              color="dark"
              onClick={handleClickOpen}
            >
              <Icon>edit</Icon>
            </SuiButton>
            <SuiButton
              style={{ margin: 2 }}
              variant="contained"
              size="medium"
              color="error"
              onClick={() => deletePost()}
            >
              <Icon>delete</Icon>
            </SuiButton>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DefaultProjectCard;
