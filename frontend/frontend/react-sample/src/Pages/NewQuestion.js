import QuestionForm from "../Components/QuestionForm";
import Common from "../Components/Common";
import "../css/NewQuestion.css";
const NewQuestion = () => {
  return (
    <>
      <Common />
      <h2 id="newQuestionTitle">質問作成</h2>
      <QuestionForm />
    </>
  );
};

export default NewQuestion;
