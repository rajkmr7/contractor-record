import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import LogoSection from "../LogoSection";
import SearchSection from "./SearchSection";
import ProfileSection from "./ProfileSection";
import NotificationSection from "./NotificationSection";
import MenuBook from "@mui/icons-material/MenuBook";
import { IconButton } from "@mui/material";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({
  handleLeftDrawerToggle,
}: {
  handleLeftDrawerToggle: () => void;
}) => {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        {/* <ButtonBase sx={{ borderRadius: "12px" }}> */}
        <IconButton
          sx={{ borderRadius: "12px", p: 0 }}
          onClick={handleLeftDrawerToggle}
        >
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&[aria-controls="menu-list-grow"],&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
            // aria-haspopup="true"
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <MenuBook sx={{ fontSize: "1.3rem", stroke: 1.5 }} />
          </Avatar>
        </IconButton>
        {/* </ButtonBase> */}
      </Box>

      {/* header search */}
      <SearchSection />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      <NotificationSection />
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
