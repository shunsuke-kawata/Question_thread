import "../css/Header.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

const Header = ({ setMenubarFlag }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar children="node" position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenubarFlag(true)}
          >
            ＋
          </IconButton>

          <Typography variant="h5" color="inherit" component="div">
            タイトル
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
