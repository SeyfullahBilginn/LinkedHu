/* eslint-disable no-unused-vars */
// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

import Card from "@mui/material/Card";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiButton from "components/SuiButton";
import pp from "assets/images/pp.jpg";
import { useEffect, useState } from "react";
import UserService from "services/UserService";

function CommentsList({ comment }) {
  const [formattedDate, setFormattedDate] = useState({
    day: null,
    month: null,
    year: null,
    hour: null,
    minute: null,
  });
  const [user, setUser] = useState();
  function formatDate(dateObj) {
    const date = new Date(dateObj);
    let month = date.getDate() + 1;
    let day = date.getMonth() + 1;

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    setFormattedDate({
      day,
      month,
      year: date.getFullYear(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    });
  }

  useEffect(() => {
    console.log(comment);
    UserService.getUser(comment.userId)
      .then((res) => {
        setUser(res.data);
        formatDate(comment.date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!user && formattedDate) {
    return (
      <Card sx={{ height: "100%", marginTop: 2 }}>
        <SuiBox p={2}>loading</SuiBox>
      </Card>
    );
  }
  return (
    <Card sx={{ height: "100%", marginTop: 2 }}>
      <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
        <SuiBox component="li" display="flex" alignItems="center" py={1} pr={1} mb={1}>
          <SuiButton component={Link} variant="text" color="info" to={`/connections/${user.id}`}>
            <SuiAvatar src={pp} alt="something here" variant="rounded" shadow="md" />
          </SuiButton>
          <SuiBox
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            style={{ width: "100%" }}
          >
            <SuiBox>
              <SuiButton
                component={Link}
                variant="text"
                color="info"
                to={`/connections/${user.id}`}
                style={{ padding: 0 }}
              >
                {user.firstName} {user.lastName}
              </SuiButton>
              <SuiBox>{comment.text}</SuiBox>
            </SuiBox>
            <SuiBox
              pt={1}
              mb={0.5}
              flexDirection="row"
              display="flex"
              justifyContent="space-between"
            >
              <SuiTypography variant="body2" fontSize={14} color="text" fontWeight="regular">
                {formattedDate.day}/{formattedDate.month}/{formattedDate.year}
                {" - "}
                {formattedDate.hour}:{formattedDate.minute}
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default CommentsList;
