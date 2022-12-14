import { TextField, Stack, Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignupForm.css";

const SignupForm = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post(process.env.REACT_APP_HOST_URL + "/signup", data);
      reset();
      navigate("/login");
    } catch (err) {
      reset();
      alert(err.response.data);
    } finally {
      console.log(data);
    }
  };

  return (
    <>
      <form id="signup">
        <Stack spacing={3}>
          <TextField
            className="signupField"
            autoComplete="off"
            required
            label="メールアドレス"
            placeholder="有効なメールアドレスを入力してください"
            type="email"
            {...register("email", { required: "email is required field" })}
          />
          <p className="error-sentence">{errors.email?.message}</p>
          <TextField
            className="signupField"
            autoComplete="off"
            required
            label="ニックネーム"
            placeholder="ニックネームを入力してください"
            {...register("nickname", {
              required: "nickname is required field",
            })}
          />
          <p className="error-sentence">{errors.nickname?.message}</p>
          <TextField
            className="signupField"
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
            id="signupButton"
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

export default SignupForm;
