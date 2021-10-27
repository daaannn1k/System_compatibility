import React, { useState, useContext, useEffect } from "react";
import { Zoom } from "@mui/material";
import useHttp from "../hooks/http.hook.js";
import Alert from "../components/Alert.jsx";
import { AlertContext } from "../context/alertContext.js";

const Comment = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [commentInfo, setCommentInfo] = useState({
    comment: "",
    user: "",
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const { showAlert, hideAlert, visible } = useContext(AlertContext);
  const { request } = useHttp();
  const handleCommentInfo = (event) => {
    setCommentInfo((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  useEffect(() => {
    if (commentInfo.comment.trim() && commentInfo.user.trim()) {
      setDisableBtn(false);
    }
  }, [commentInfo]);
  const handleExpand = () => {
    setExpanded(true);
  };
  const sendMessage = async () => {
    try {
      showAlert(true);
      setCommentInfo({
        comment: "",
        user: "",
      });
      setDisableBtn(true);
      const data = await request("/myapp/comments", "POST", { ...commentInfo });
      setTimeout(() => {
        hideAlert();
      }, 2000);
      return data.message;
    } catch (e) {}
  };
  return (
    <div className="container w-50 mt-5">
      {!visible ? (
        <div>
          <div className="mb-3">
            <label htmlFor="commentSection" className="form-label">
              Comment:
            </label>
            <textarea
              className="form-control"
              id="commentSection"
              rows={isExpanded ? 3 : 1}
              name="comment"
              type="text"
              placeholder="Write your comment here..."
              autoComplete="off"
              onClick={handleExpand}
              onChange={handleCommentInfo}
              value={commentInfo.comment}
            ></textarea>
          </div>
          <Zoom
            in={isExpanded}
            style={{ transitionDelay: isExpanded ? "300ms" : "0ms" }}
          >
            <div className="mb-3">
              <div>
                <label htmlFor="user" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="user"
                  placeholder="Please, write your name here..."
                  name="user"
                  autoComplete="off"
                  onChange={handleCommentInfo}
                  value={commentInfo.user}
                />
                <button
                  onClick={sendMessage}
                  type="button"
                  className="btn btn-secondary mt-3"
                  disabled={disableBtn}
                >
                  Send comment
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      ) : (
        <Alert />
      )}
    </div>
  );
};
export default Comment;
