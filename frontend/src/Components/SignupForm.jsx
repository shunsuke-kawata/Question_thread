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

  const checkMailFormat = async (address) => {
    var pattern =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    if (pattern.test(address)) {
      /*パターンにマッチした場合*/
      return true;
    } else {
      /*パターンにマッチしない場合*/
      return false;
    }
  };

  const onSubmit = async (data) => {
    try {
      var flag = await checkMailFormat(data.email);
      if (flag) {
        await axios.post(process.env.REACT_APP_HOST_URL + "/signup", data);
      } else {
        alert("email address format is not right");
        return;
      }
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
            {...register("email", { required: "メールアドレスが未入力です" })}
          />
          <p className="error-sentence">{errors.email?.message}</p>
          <TextField
            className="signupField"
            autoComplete="off"
            required
            label="ニックネーム"
            placeholder="ニックネームを入力してください"
            {...register("nickname", {
              required: "ニックネームが未入力です",
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
              required: "パスワードが未入力です",
            })}
          />
          <p className="error-sentence">{errors.password?.message}</p>
          <TextField
            className="signupField"
            autoComplete="off"
            required
            label="再確認用パスワード"
            placeholder="パスワードをもう一度入力してください"
            type="password"
            {...register("confirmPassword", {
              minLength: 6,
              required: "確認用パスワードが未入力です",
            })}
          />
          <p className="error-sentence">{errors.confirmPassword?.message}</p>
          <Button
            id="signupButton"
            color="primary"
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            サインアップ
          </Button>
          <Link id="afterLogin" to="/login">
            すでにログイン済みの場合はこちら
          </Link>
        </Stack>
      </form>
    </>
  );
};
export default SignupForm;
