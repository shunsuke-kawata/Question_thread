import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField, Stack, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../css/LoginForm.css";

const LoginForm = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios
        .post(process.env.REACT_APP_HOST_URL + "/login", data)
        .then((response) => {
          console.log(response.data, response.data.Email);

          //localstorageにnicknameとパスワードを保存
          localStorage.setItem("nickname", response.data.Nickname);
          localStorage.setItem("email", response.data.Email);
          reset();
          navigate("/");
        });
    } catch (err) {
      alert(err.response.data);
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
              required: "メールアドレスが未入力です",
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
              required: "パスワードが未入力です",
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
          <Link id="beforeLogin" to="/signup">
            サインアップする
          </Link>
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
