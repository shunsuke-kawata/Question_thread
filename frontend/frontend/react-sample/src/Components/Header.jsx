import "../css/Title.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

const Header = ({ setMenubarFlag }) => {
  return (
    <div>
      <AppBar position="static">
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
    </div>
  );
};

export default Header;
