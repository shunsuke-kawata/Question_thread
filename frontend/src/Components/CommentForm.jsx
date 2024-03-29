import { useForm } from "react-hook-form";
import "../css/CommentForm.css";
import { TextareaAutosize, Button } from "@mui/material";
import axios from "axios";

const CommentForm = ({ clickedQuestion, setShowFormFlag }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  var email = localStorage.getItem("email");
  register("email", { value: email });
  const onSubmit = async (data) => {
    try {
      await axios.post(process.env.REACT_APP_HOST_URL + "/commentPost", data);
      reset();
      setShowFormFlag(false);
      window.location.reload();
    } catch (err) {
      alert(err.response.data);
    } finally {
      console.log(data);
    }
  };

  return (
    <>
      <div id="commentForm">
        <div className="hiddenElement">
          <input defaultValue={clickedQuestion.ID} {...register("qid")}></input>
          <input defaultValue={9} {...register("uid")}></input>
        </div>
        <TextareaAutosize
          className="commentBody"
          minRows={2}
          size="large"
          placeholder="質問の回答・コメントを入力してください"
          {...register("body", { required: "本文が未入力です" })}
        />
        <p id="comment_error" className="error-sentence">
          {errors.body?.message}
        </p>
        <Button
          id="commentPostButton"
          color="primary"
          variant="contained"
          size="small"
          onClick={handleSubmit(onSubmit)}
        >
          投稿する
        </Button>
        <Button
          id="quitButton"
          size="small"
          onClick={() => setShowFormFlag(false)}
        >
          やめる
        </Button>
      </div>
    </>
  );
};

export default CommentForm;
