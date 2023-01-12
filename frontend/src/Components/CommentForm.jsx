import { useForm } from "react-hook-form";
import "../css/CommentForm.css";
import { TextareaAutosize, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CommentForm = ({ clickedQuestion, setShowFormFlag }) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post(process.env.REACT_APP_HOST_URL + "/commentPost", data);
      reset();
      setShowFormFlag(false);
    } catch (err) {
      alert(err.response.data);
    } finally {
      console.log(data);
      navigate("/");
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
          {...register("body", { required: "body is required field" })}
        />
        <p className="error-sentence">{errors.body?.message}</p>
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
