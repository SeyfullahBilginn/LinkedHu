/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/hacettepe.jpg";
// eslint-disable-next-line prettier/prettier
import { useEffect, useState } from 'react';
import Divider from "@mui/material/Divider";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import UserService from "services/UserService";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LikeService from "services/LikeService";
import { Link } from "@mui/material";

function MeetingPost(meeting) {
  const [formattedDate, setFormattedDate] = useState({
    day: null,
    month: null,
    year: null,
    hour: null,
    minute: null,
  });
  const { userCookie } = useAuth();
  const [likesNum, setLikesNum] = useState();
  const [isLiked, setIsLiked] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  async function fetchUser(id) {
    UserService.getUser(id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(async () => {
    await fetchUser(meeting.meeting.userId);
    const date = new Date(meeting.meeting.date);
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
    setLikesNum(meeting.meeting.likes.length);

    const checkIds = (obj) => obj.userId === userCookie.user.id;
    const check = meeting.meeting.likes.some(checkIds);
    if (check) {
      setIsLiked(true);
    }
  }, []);

  function addOrRemoveLike() {
    LikeService.getMeetingLikes(userCookie.user.id, meeting.meeting.id)
      .then(() => {
        if (isLiked) {
          setLikesNum(likesNum - 1);
        } else {
          setLikesNum(likesNum + 1);
        }
        setIsLiked(!isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (!user) {
    return <div>LOADING</div>;
  }

  return (
    <Card>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox pt={1} mb={0.5}>
                <SuiBox flexDirection="row" display="flex" justifyContent="space-between">
                  <SuiTypography
                    variant="body2"
                    color="text"
                    fontWeight="medium"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/connections/${user.id}`)}
                  >
                    {user.firstName} {user.lastName}
                  </SuiTypography>
                  <SuiTypography variant="body2" color="text" fontWeight="medium">
                    {formattedDate.day}/{formattedDate.month}/{formattedDate.year}
                    {" - "}
                    {formattedDate.hour}:{formattedDate.minute}
                  </SuiTypography>
                </SuiBox>
              </SuiBox>
              <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                {meeting.meeting.title}
              </SuiTypography>
              <SuiBox mb={6}>
                <SuiTypography variant="body2" color="text">
                  {meeting.meeting.description}
                </SuiTypography>
                <Link href={meeting.meeting.link} color="blue">
                  Join Meeting Now
                </Link>
              </SuiBox>
              <SuiTypography
                component="a"
                href={`/meetings/${meeting.meeting.id}`}
                variant="button"
                color="text"
                fontWeight="medium"
                sx={{
                  mt: "auto",
                  mr: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translate(2px, -0.5px)`,
                    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                  },

                  "&:hover .material-icons-round, &:focus  .material-icons-round": {
                    transform: `translate(6px, -0.5px)`,
                  },
                }}
              >
                See More
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SuiTypography>
              <Divider />
              <SuiBox style={{ display: "flex", flexDirection: "row", paddingBottom: 4 }}>
                <SuiBox
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <SuiTypography
                    variant="text"
                    fontWeight="regular"
                    sx={{
                      fontSize: 14,
                      padding: 0.6,
                      mt: "auto",
                      mr: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    {likesNum} likes
                  </SuiTypography>
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    sx={{
                      border: 2.5,
                      borderRadius: 2,
                      padding: 0.6,
                      mt: "auto",
                      mr: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",

                      "& .material-icons-round": {
                        fontSize: "1.125rem",
                        transform: `translate(2px, -0.5px)`,
                        transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                      },

                      "&:hover .material-icons-round, &:focus .material-icons-round": {
                        transform: `translate(6px, -0.5px)`,
                      },

                      "&:hover": {
                        color: "rgb(60,180,250)",
                      },
                    }}
                    onClick={() => addOrRemoveLike()}
                  >
                    Like
                    <Icon sx={{ fontWeight: "bold", marginX: "6px" }} fontSize="small">
                      {isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltOutlinedIcon />}
                    </Icon>
                  </SuiTypography>
                </SuiBox>
                <SuiBox
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 6,
                  }}
                >
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    sx={{
                      border: 2.5,
                      borderRadius: 2,
                      marginLeft: 1,
                      padding: 0.6,
                      mt: "auto",
                      mr: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",

                      "& .material-icons-round": {
                        fontSize: "1.125rem",
                        transform: `translate(2px, -0.5px)`,
                        transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                      },

                      "&:hover .material-icons-round, &:focus .material-icons-round": {
                        transform: `translate(6px, -0.5px)`,
                        color: "rgb(60,180,250)",
                      },

                      "&:hover": {
                        color: "rgb(60,180,250)",
                      },
                    }}
                    onClick={() => navigate(`/meetings/${meeting.meeting.id}`)}
                  >
                    Add Comment
                    <Icon sx={{ fontWeight: "bold", marginX: "6px" }} fontSize="small">
                      <MessageOutlinedIcon />
                    </Icon>
                  </SuiTypography>
                </SuiBox>
              </SuiBox>
            </SuiBox>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SuiBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
            >
              <SuiBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <SuiBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default MeetingPost;
