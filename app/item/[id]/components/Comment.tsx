"use client";
import React, { useEffect, useState } from "react";
import svgStar from "../../../../assests/images/star-svgrepo-com.svg";
import "../style/comment.scss";
import axios from "axios";
import NameRatingModal from "./CommentModal";
import Image from "next/image";

interface CommentType {
  _id?: string;
  productId: string;
  userName: string;
  commentText: string;
  starRating: number;
  createdAt: string;
}

interface CommentProps {
  productId: string;
  calculateAverageRating:any
  averageRating:any
  fetchComments:any
  comments:CommentType[]
}

const Comment: React.FC<CommentProps> = ({ productId,averageRating,fetchComments,comments }) => {
  const [newComment, setNewComment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRating, setUserRating] = useState(0);

  

  useEffect(() => {
    fetchComments();
  }, [productId]);

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    if (!userName || userRating === 0) {
      setShowModal(true);
      return;
    }
    await submitComment(userName, userRating);
  };

  const submitComment = async (name: string, rating: number) => {
    try {
      const commentData = {
        productId,
        userName: name,
        commentText: newComment,
        starRating: rating,
      };
      await axios.post("https://kontakt-back-2.onrender.com/api/comments", commentData);
      setNewComment("");
      setUserName("");
      setUserRating(0);
      fetchComments();
    } catch (error) {
      console.error("Şərh göndərilərkən xəta:", error);
    }
  };

  const handleModalSubmit = (name: string, rating: number) => {
    setUserName(name);
    setUserRating(rating);
    setShowModal(false);
    submitComment(name, rating);
  };

  return (
    <div className="comment">
      <div className="comment-title">Rəylər <span>({comments.length})</span></div>
      <div className="star-rating">
        <span className="rating">{averageRating.toFixed(1)}</span>
        <span className="star">
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            src={svgStar}
            alt={`Ulduz ${index + 1}`}
            style={{
              width: "20px",
              height: "20px",
              margin: "0 2px",
              filter: index < Math.round(averageRating) ? "grayscale(0%)" : "grayscale(100%)"
            }}
            className="form-icon"
          />
        ))}
        </span>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Rəy yaz"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></input>
        <button type="submit">Göndər</button>
      </form>
      {showModal && (
        <NameRatingModal
          onSubmit={handleModalSubmit}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="comments">
  {[...comments].reverse().map((comment) => (
    <div key={comment._id} className="comment-item">
      <div className="users">
        <div className="user">
          {comment.userName.charAt(0).toUpperCase()}
        </div>
        <div className="date-added">
          <div className="name">{comment.userName}</div>
          <div className="date">
            {new Date(comment.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="star-comment-container">
        <div className="star-count">
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src={svgStar}
              alt={`Ulduz ${index + 1}`}
              style={{
                filter: index < comment.starRating ? "grayscale(0%)" : "grayscale(100%)"
              }}
              className="form-icon"
            />
          ))}
        </div>
        <div className="user-comment">{comment.commentText}</div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Comment;
