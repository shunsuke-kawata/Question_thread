import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField, Stack, Button, TextareaAutosize } from "@mui/material";
import "../css/QuestionForm.css";

const QuestionForm = () => {
  //データを登録するためのフックステート
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const params = new URLSearchParams(data);
    axios.post("http://localhost:8080", params);
    console.log(data);
    reset();
  };
  return (
    <>
      <form id="questionform">
        <Stack className="questionStack" spacing={3}>
          <input
            className="reqFlag"
            type="text"
            value="post_question"
            {...register("flag")}
          />
          <div id="titleBlock">
            <TextField
              className="questionTitle"
              id="standard-basic"
              variant="standard"
              autoComplete="off"
              label="タイトル"
              placeholder="質問のタイトルを入力してください"
              type="text"
              {...register("title", { required: "title is required field" })}
            />
            <p className="error-sentence">{errors.title?.message}</p>
          </div>
          <TextareaAutosize
            className="questionBody"
            minRows={3}
            placeholder="質問の内容を入力してください"
            {...register("body", { required: "body is required field" })}
          />
          <p className="error-sentence">{errors.body?.message}</p>
          <Button
            id="postButton"
            color="primary"
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            投稿する
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default QuestionForm;
