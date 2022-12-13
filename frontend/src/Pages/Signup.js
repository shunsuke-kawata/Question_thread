import Common from "../Components/Common";
import SignupForm from "../Components/SignupForm";
import "../css/Signin.css";

const Signup = () => {
  //データを登録するためのフックステー
  return (
    <>
      <Common />
      <h2 id="signinTitle">サインイン</h2>
      <SignupForm />
    </>
  );
};

export default Signup;
