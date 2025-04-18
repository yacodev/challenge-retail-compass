import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/retail-compass.png";
import { Logo, StyledAppBar } from "./styles";

export const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Logo src={logo} alt="Retail Compass Logo" />
          <Typography variant="h4">Retail Compass</Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
