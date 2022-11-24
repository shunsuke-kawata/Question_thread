import Common from "../Components/Common";
import { useForm } from "react-hook-form";
import LoginForm from "../Components/LoginForm";
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
      <LoginForm />
    </>
  );
};

export default Login;
