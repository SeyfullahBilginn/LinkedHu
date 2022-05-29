/* eslint-disable react/destructuring-assignment */
// import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/hacettepe.jpg";
// eslint-disable-next-line prettier/prettier
import Divider from "@mui/material/Divider";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JobService from "services/JobService";
import { useAuth } from "contexts/AuthContext";
import LikeService from "services/LikeService";
import CommentService from "services/CommentService";
import SuiButton from "components/SuiButton";
// import { Link } from "@mui/material";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout/index";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar/index";
import SuiInput from "../../components/SuiInput/index";
import CommentsList from "../../examples/Lists/CommentsList/index";

function JobDetail() {
  const [formattedDate, setFormattedDate] = useState({
    day: null,
    month: null,
    year: null,
    hour: null,
    minute: null,
  });
  const [job, setJob] = useState();
  const [comment, setComment] = useState();
  const [likesNum, setLikesNum] = useState();
  const [commentsNum, setCommentsNum] = useState();
  const [isLiked, setIsLiked] = useState();
  const location = useLocation();
  const { userCookie } = useAuth();

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

  function getJob(id) {
    JobService.getJob(id).then((res) => {
      setJob(res.data);
      setLikesNum(res.data.likes.length);
      setCommentsNum(res.data.comments.length);
      const checkIds = (obj) => obj.userId === userCookie.user.id;
      const check = res.data.likes.some(checkIds);
      if (check) {
        setIsLiked(true);
      }
      formatDate(res.data.date);
    });
  }

  useEffect(async () => {
    const id = location.pathname.split("/").at(2);
    await getJob(id);
  }, [commentsNum]);
  function addOrRemoveLike() {
    LikeService.getJobLikes(userCookie.user.id, job.id)
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

  function click() {
    CommentService.addJobComment(userCookie.user.id, job.id, comment)
      .then(() => {
        setCommentsNum(commentsNum + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!job) {
    return (
      <DashboardLayout>
        <DashboardNavbar>
          <h2>yükleniyor</h2>
        </DashboardNavbar>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid style={{ backgroundColor: "white", borderRadius: 12, padding: 10 }} container>
          <Grid item xs={12} lg={6}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox
                pt={1}
                mb={0.5}
                flexDirection="row"
                display="flex"
                justifyContent="space-between"
              >
                <SuiTypography variant="body2" color="text" fontWeight="medium">
                  {formattedDate.day}/{formattedDate.month}/{formattedDate.year}
                  {" - "}
                  {formattedDate.hour}:{formattedDate.minute}
                </SuiTypography>
              </SuiBox>
              <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                {job.title}
              </SuiTypography>
              <SuiBox mb={6}>
                <SuiTypography variant="body2" color="text">
                  {job.description}
                </SuiTypography>
              </SuiBox>
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
                    {commentsNum} comments
                  </SuiTypography>
                  <SuiTypography
                    variant="button"
                    fontWeight="medium"
                    onClick={() => console.log("asdasd")}
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
                        color: "rgb(60,180,250)",
                      },

                      "&:hover": {
                        color: "rgb(60,180,250)",
                      },
                    }}
                  >
                    Comments
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
        <Grid mt={2}>
          <SuiBox pr={1}>
            <SuiBox display="flex" flexDirection="row" alignItems="center">
              <SuiInput
                placeholder="Add comment here..."
                text="asd"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <SuiButton
                style={{ margin: 10 }}
                variant="contained"
                size="medium"
                color="dark"
                onClick={() => click()}
              >
                <Icon>add</Icon>
              </SuiButton>
            </SuiBox>
          </SuiBox>
          <Grid item>
            {job.comments.map((com) => (
              <CommentsList comment={com} key={com.id} commentsNum={commentsNum} />
            ))}
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default JobDetail;
