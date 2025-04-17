import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../../assets/retail-compass.png";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#3f51b5",
});

const Logo = styled("img")({
  height: "40px",
  marginRight: "16px",
});

export const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Logo src={logo} alt="Retail Compass Logo" />
          <Typography variant="h6" component="div">
            Retail Compass
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
