import { useForm } from "react-hook-form";
import Common from "../Components/Common";
import SigninForm from "../Components/SigninForm";
import "../css/Signin.css";

const Signin = () => {
  //データを登録するためのフックステー
  return (
    <>
      <Common />
      <h2 id="signinTitle">サインイン</h2>
      <SigninForm />
    </>
  );
};

export default Signin;
