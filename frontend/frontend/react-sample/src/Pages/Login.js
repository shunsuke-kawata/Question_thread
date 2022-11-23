import Common from "../Components/Common";
import { useForm } from "react-hook-form";
import { TextField, Stack, Button } from "@mui/material";
import "../css/Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Common />
      <h2 id="loginTitle">ログイン</h2>
      <div id="login">
        <Stack spacing={3}>
          <TextField
            className="signinField"
            autoComplete="off"
            required
            label="メールアドレス"
            type="email"
            {...register("email")}
          />
          <TextField
            className="signinField"
            autoComplete="off"
            required
            label="パスワード"
            type="password"
            {...register("password")}
          />
          <Button
            id="signinButton"
            color="primary"
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            ログイン
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Login;
