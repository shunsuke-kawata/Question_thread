import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/LoginForm.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8080/login", data);
      reset();
    } catch (err) {
      console.log(err);
    } finally {
      console.log(data);
    }
  };
  return (
    <>
      <form id="login">
        <Stack spacing={3}>
          <TextField
            className="signinField"
            autoComplete="off"
            required
            label="メールアドレス"
            placeholder="有効なメールアドレスを入力してください"
            type="email"
            {...register("email", {
              required: "email is required field",
            })}
          />
          <p className="error-sentence">{errors.email?.message}</p>
          <TextField
            className="signinField"
            autoComplete="off"
            required
            label="パスワード"
            placeholder="6文字以上のパスワードを入力してください"
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
            ログイン
          </Button>
          <Link to="/signin">サインインする</Link>
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
