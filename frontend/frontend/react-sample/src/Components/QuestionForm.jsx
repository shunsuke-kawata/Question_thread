import { useForm } from "react-hook-form";
import { TextField, Stack, Button, TextareaAutosize } from "@mui/material";
import "../css/QuestionForm.css";

const QuestionForm = () => {
  //データを登録するためのフックステート
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
      <div id="questionform">
        <Stack className="questionStack" spacing={3}>
          <div id="titleBlock">
            <TextField
              className="questionTitle"
              id="standard-basic"
              variant="standard"
              autoComplete="off"
              label="タイトル"
              type="text"
              {...register("title", { required: true })}
            />
          </div>
          <TextareaAutosize
            className="questionBody"
            minRows={3}
            placeholder="質問の内容を入力してください"
            {...register("body", { required: true })}
          />
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
      </div>
    </>
  );
};

export default QuestionForm;
