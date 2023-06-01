import React, { useState } from "react";
import people from "./data";
import Image from "./Image";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const leftClickHandler = () => {
    if (currentReview === 0) {
      setCurrentReview(people.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  };

  const rightClickHandler = () => {
    if (currentReview === people.length - 1) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  };
  return (
    <div>
      <Image image={people[currentReview].image}></Image>
      <p>{people[currentReview].text}</p>
      <span>
        <FaChevronLeft onClick={leftClickHandler} />
        <FaChevronRight onClick={rightClickHandler} />
      </span>
    </div>
  );
};

export default Review;
