// @mui material components
import Divider from "@mui/material/Divider";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Separator({ text }) {
  return (
    <SuiBox position="relative" py={0.25}>
      <Divider />
      <SuiBox
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <SuiTypography variant="button" fontWeight="medium" color="secondary">
          {text}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

export default Separator;
