import { useForm } from "react-hook-form";
import "../css/Signin.css";
import { TextField, Stack, Button } from "@mui/material";
import Common from "../Components/Common";

const Signin = () => {
  //データを登録するためのフックステート
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Common />
      <h2 id="signinTitle">サインインページ</h2>
      <div id="signin">
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
            label="ニックネーム"
            {...register("nickname")}
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
            サインイン
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Signin;
