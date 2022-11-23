import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const QuestionForm = () => {
  //データを登録するためのフックステート
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h1>新規質問追加画面</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>タイトル</label>
        <input {...register("title")} />
        <label>本文</label>
        <input {...register("body")} />
        <input type="submit" />
      </form>
    </>
  );
};

export default QuestionForm;
