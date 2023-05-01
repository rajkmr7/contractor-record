import { useDispatch, useSelector } from "react-redux";

// material-ui
import { Box, ButtonBase, Typography } from "@mui/material";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* <Typography variant="h3" color="#5e35b1">
        Logo
      </Typography> */}
      <img style={{ width: "6rem" }} src="/logo.jpg" alt="logo" />
      <Typography variant="h6" color="#5e35b1" ml={0}>
        Contractor ERP
      </Typography>
    </Box>
  );
};

export default LogoSection;
