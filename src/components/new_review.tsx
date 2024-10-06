"use client";
import "~/styles/game.css";
import FullStar from "./full_star";
import EmptyStar from "./empty_star";
import React, { useState } from "react";

const NewReview = () => {
  const [star1Filled, setStar1Filled] = useState(false);
  const [star2Filled, setStar2Filled] = useState(false);
  const [star3Filled, setStar3Filled] = useState(false);
  const [star4Filled, setStar4Filled] = useState(false);
  const [star5Filled, setStar5Filled] = useState(false);

  const handleStarClick = (starId: number) => {
    setStar1Filled(false);
    setStar2Filled(false);
    setStar3Filled(false);
    setStar4Filled(false);
    setStar5Filled(false);

    if (starId == 1) {
      setStar1Filled(true);
    } else if (starId == 2) {
      setStar1Filled(true);
      setStar2Filled(true);
    } else if (starId == 3) {
      setStar1Filled(true);
      setStar2Filled(true);
      setStar3Filled(true);
    } else if (starId == 4) {
      setStar1Filled(true);
      setStar2Filled(true);
      setStar3Filled(true);
      setStar4Filled(true);
    } else if (starId == 5) {
      setStar1Filled(true);
      setStar2Filled(true);
      setStar3Filled(true);
      setStar4Filled(true);
      setStar5Filled(true);
    }
  };

  return (
    <div>
      <div className="star_box ml-[30px]" />
      <div className="absolute ml-[32px] mt-[5px]">
        <div className="rating">
          <div className="rating_star" onClick={() => handleStarClick(1)}>
            {star1Filled ? <FullStar /> : <EmptyStar />}
          </div>
          <div className="rating_star" onClick={() => handleStarClick(2)}>
            {star2Filled ? <FullStar /> : <EmptyStar />}
          </div>
          <div className="rating_star" onClick={() => handleStarClick(3)}>
            {star3Filled ? <FullStar /> : <EmptyStar />}
          </div>
          <div className="rating_star" onClick={() => handleStarClick(4)}>
            {star4Filled ? <FullStar /> : <EmptyStar />}
          </div>
          <div className="rating_star" onClick={() => handleStarClick(5)}>
            {star5Filled ? <FullStar /> : <EmptyStar />}
          </div>
        </div>
      </div>
      <input name="review-content" className="new_review_box ml-[60px]" />
    </div>
  );
};

export default NewReview;
