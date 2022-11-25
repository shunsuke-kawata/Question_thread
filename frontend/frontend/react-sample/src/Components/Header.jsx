import "../css/Header.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";

const Header = ({ setMenubarFlag }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appbar" children="node" position="fixed">
        <Toolbar variant="dense">
          <IconButton
            id="buttonIcon"
            edge="start"
            color="inherit"
            aria-label="menu"
            variant="h2"
            sx={{ mr: 2 }}
            onClick={() => setMenubarFlag(true)}
          >
            ≡
          </IconButton>

          <Typography variant="h4" color="inherit" component="div">
            Question Thread
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
