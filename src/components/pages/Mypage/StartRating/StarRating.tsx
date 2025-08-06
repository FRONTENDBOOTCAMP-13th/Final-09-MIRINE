// components/StarRating/StarRating.tsx
import React, { useState } from "react";
import styles from "./starRating.module.css";

interface StarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
  maxStars?: number;
  disabled?: boolean;
}

export default function StarRating({ rating, onChange, maxStars = 5, disabled = false }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleStarClick = (starIndex: number) => {
    if (disabled) return;
    onChange(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    if (disabled) return;
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setHoverRating(0);
  };

  const displayRating = hoverRating || rating;

  return (
    <div className={styles.starRating}>
      <div className={styles.starsContainer} onMouseLeave={handleMouseLeave}>
        {Array.from({ length: maxStars }, (_, index) => {
          const starIndex = index + 1;
          const isFilled = starIndex <= displayRating;

          return (
            <button
              key={starIndex}
              type="button"
              className={`
                ${styles.star} 
                ${isFilled ? styles.filledStar : ""} 
                ${disabled ? styles.disabled : ""}
              `}
              onClick={() => handleStarClick(starIndex)}
              onMouseEnter={() => handleStarHover(starIndex)}
              disabled={disabled}
            >
              {isFilled ? "★" : "☆"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
