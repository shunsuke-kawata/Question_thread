import { TextField, Stack, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../css/SigninForm.css";

const SiginForm = () => {
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
      <form id="signin">
        <Stack spacing={3}>
          <TextField
            className="signinField"
            autoComplete="off"
            required
            label="メールアドレス"
            type="email"
            {...register("email", { required: "email is required field" })}
          />
          <p className="error-sentence">{errors.email?.message}</p>
          <TextField
            className="signinField"
            autoComplete="off"
            required
            label="ニックネーム"
            {...register("nickname", {
              required: "nickname is required field",
            })}
          />
          <p className="error-sentence">{errors.nickname?.message}</p>
          <TextField
            className="signinField"
            autoComplete="off"
            required
            label="パスワード"
            type="password"
            {...register("password", {
              minLength: 6,
              required: "password is required field",
            })}
          />
          <p className="error-sentence">{errors.password?.message}</p>
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

export default SiginForm;
