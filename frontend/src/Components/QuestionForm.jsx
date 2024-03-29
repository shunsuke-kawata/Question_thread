import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField, Stack, Button, TextareaAutosize } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/QuestionForm.css";

const QuestionForm = () => {
  let navigate = useNavigate();
  //データを登録するためのフックステート
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  var email = localStorage.getItem("email");
  register("email", { value: email });
  const onSubmit = async (data) => {
    console.log(email);
    try {
      await axios.post(process.env.REACT_APP_HOST_URL + "/questionPost", data);
      // reset();
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response.data);
    } finally {
      console.log(data);
    }
  };
  return (
    <>
      <form id="questionform">
        <Stack className="questionStack" spacing={3}>
          <div id="titleBlock">
            <TextField
              className="questionTitle"
              id="standard-basic"
              variant="standard"
              autoComplete="off"
              label="タイトル"
              placeholder="質問のタイトルを入力してください"
              type="text"
              {...register("title", { required: "タイトルが未入力です" })}
            />
            <p className="error-sentence">{errors.title?.message}</p>
          </div>
          <TextareaAutosize
            className="questionBody"
            minRows={3}
            placeholder="質問の内容を入力してください"
            {...register("body", { required: "本文が未入力です" })}
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
