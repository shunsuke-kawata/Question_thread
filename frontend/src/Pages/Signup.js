import Common from "../Components/Common";
import SignupForm from "../Components/SignupForm";
import "../css/Signup.css";

const Signup = () => {
  //データを登録するためのフックステー
  return (
    <>
      <Common />
      <h2 id="signupTitle">サインアップ</h2>
      <SignupForm />
    </>
  );
};

export default Signup;
