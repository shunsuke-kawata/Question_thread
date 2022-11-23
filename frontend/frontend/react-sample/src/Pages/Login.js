import Common from "../Components/Common";
import { useForm } from "react-hook-form";
import { TextField, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
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
            {...register("email", { required: true })}
          />
          <TextField
            className="signinField"
            autoComplete="off"
            required
            label="パスワード"
            type="password"
            {...register("password", { required: true })}
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
          <Link to="/signin">サインインする</Link>
        </Stack>
      </div>
    </>
  );
};

export default Login;
