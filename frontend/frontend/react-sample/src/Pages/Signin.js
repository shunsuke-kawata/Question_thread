import { useForm } from "react-hook-form";
import "../css/Signin.css";
import { TextField, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Common from "../Components/Common";

const Signin = () => {
  //データを登録するためのフックステート
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
      <h2 id="signinTitle">サインイン</h2>
      <form id="signin">
        <Stack spacing={3}>
          <TextField
            className="signinField"
            autoComplete="off"
            label="メールアドレス"
            type="email"
            {...register("email", { required: true })}
          />
          <TextField
            className="signinField"
            autoComplete="off"
            label="ニックネーム"
            {...register("nickname", { required: true })}
          />
          <TextField
            className="signinField"
            autoComplete="off"
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
            サインイン
          </Button>
          <Link to="/login">すでにログイン済みの場合はこちら</Link>
        </Stack>
      </form>
    </>
  );
};

export default Signin;
