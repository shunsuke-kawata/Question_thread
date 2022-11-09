import "../css/Title.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton>-</IconButton>
          <Typography variant="h6">質問掲示板サイト</Typography>
          <Button color="inherit">ログイン情報</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
