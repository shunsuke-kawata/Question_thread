import { useForm } from "react-hook-form";
import "../css/Signin.css";
import { TextField, Stack, Button } from "@mui/material";

const Signin = () => {
  //データを登録するためのフックステート
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div id="signin">
        <Stack spacing={3}>
          <h2>サインインページ</h2>
          <TextField
            required
            label="メールアドレス"
            type="email"
            {...register("email")}
          />
          <TextField required label="ニックネーム" {...register("name")} />
          <TextField
            required
            label="パスワード"
            type="password"
            {...register("password")}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            作成
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Signin;
