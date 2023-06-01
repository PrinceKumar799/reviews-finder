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

  const randomClickHandler = () => {
    let randomIdx = Math.floor(Math.random() * people.length);
    if (randomIdx === currentReview) {
      randomIdx = currentReview + 1;
    }
    if (randomIdx === people.length) {
      setCurrentReview(randomIdx - 1);
    } else if (randomIdx === 0) setCurrentReview(randomIdx + 1);
    else setCurrentReview(randomIdx);
  };

  return (
    <article className="review">
      <div className="img-container">
        <Image image={people[currentReview].image}></Image>{" "}
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[currentReview].name}</h4>
      <p className="job">{people[currentReview].job}</p>
      <div></div>
      <p className="info">{people[currentReview].text}</p>
      <span>
        <FaChevronLeft className="prev-btn" onClick={leftClickHandler} />
        <FaChevronRight className="next-btn" onClick={rightClickHandler} />
      </span>
      <br></br>
      <button className="random-btn" onClick={randomClickHandler}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
