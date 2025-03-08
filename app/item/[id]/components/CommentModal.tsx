"use client";
import React, { useEffect, useState } from "react";
import "../style/modal.scss";
import { FaTimes } from "react-icons/fa";
import svgStar from "../../../../assests/images/star-svgrepo-com.svg";
import Image from "next/image";

interface ModalProps {
  onSubmit: (name: string, rating: number) => void;
  onClose: () => void;

}

const NameRatingModal: React.FC<ModalProps> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [button, setButton] = useState(false)


  const handleStarClick = (star: number) => {
    setButton(true)
    setRating(star);
    console.log("Seçilen rating:", star);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || rating === 0) {
      alert("Zəhmət olmasa adınızı daxil edin və rating seçin!");
      return;
    }


    onSubmit(name, rating);
  };
  useEffect(() => {
    if (name.trim() !== "" && rating !== 0) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [name, rating]);
  

  return (
    <div className="modal-overlay-2" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="head">
          <h3>Məhsulu qiymətləndirin</h3>
          <button onClick={onClose} aria-label="Bağla">
            <FaTimes />
          </button>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleStarClick(star)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={svgStar}
                alt={`Ulduz ${star}`}
                style={{
                  filter: star <= rating ? "grayscale(0%)" : "grayscale(100%)",
                }}
                className="form-icon"
              />
            </span>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor=""><span>*</span> Ad</label>
          <input
            type="text"
            aria-label="Adınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="modal-buttons">
            <button className={!button ? "deActive-btn" : ""} type="submit">Göndər</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NameRatingModal;