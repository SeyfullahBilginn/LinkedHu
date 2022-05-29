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

function NonLoggedProjectCard({
  image,
  title,
  description,
  actionType,
  actionRoute,
  color,
  actionLabel,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "RGB(240,250,250)",
        padding: 2,
        boxShadow: "none",
        overflow: "visible",
      }}
    >
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
        <SuiBox display="flex" justifyContent="space-between" alignItems="center">
          {actionType === "internal" ? (
            <SuiButton
              component={Link}
              to={actionRoute}
              variant="outlined"
              size="medium"
              color={color}
            >
              {actionLabel}
            </SuiButton>
          ) : (
            <SuiButton
              component="a"
              href={actionRoute}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={color}
            >
              {actionLabel}
            </SuiButton>
          )}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Typechecking props for the NonLoggedProjectCard
NonLoggedProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NonLoggedProjectCard;
