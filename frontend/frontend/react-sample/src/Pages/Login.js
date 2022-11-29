import Common from "../Components/Common";
import LoginForm from "../Components/LoginForm";
import "../css/Login.css";

const Login = () => {
  return (
    <>
      <Common />
      <h2 id="loginTitle">ログイン</h2>
      <LoginForm />
    </>
  );
};

export default Login;
