import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/hacettepe.jpg";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Divider from "@mui/material/Divider";

function Post() {
  return (
    <Card>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox pt={1} mb={0.5}>
                <SuiTypography variant="body2" color="text" fontWeight="medium">
                  Post owner
                </SuiTypography>
              </SuiBox>
              <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                Title
              </SuiTypography>
              <SuiBox mb={6}>
                <SuiTypography variant="body2" color="text">
                  Post Description
                </SuiTypography>
              </SuiBox>
              <SuiTypography
                component="a"
                // href={`/jobs/${job.jobId}`}
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
              <SuiBox>
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
                >
                  Like
                  <Icon sx={{ fontWeight: "bold", marginX: "6px" }} fontSize="small">
                    <ThumbUpOffAltOutlinedIcon />
                  </Icon>
                </SuiTypography>
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
                >
                  Comments
                  <Icon sx={{ fontWeight: "bold", marginX: "6px" }} fontSize="small">
                    <MessageOutlinedIcon />
                  </Icon>
                </SuiTypography>
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

export default Post;
