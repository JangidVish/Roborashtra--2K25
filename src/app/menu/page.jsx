"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Card from "../../components/Card/Card";
import "./events.css";
import { ImCross } from "react-icons/im";
import popUpImage from "../../images/Glimpse/7daystogo.jpg"; // Ensure this path is correct

const Cards = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date("2025-02-03");
    const difference = endDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showPopup, setShowPopup] = useState(true); // State to manage popup visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const closePopup = () => {
    setShowPopup(false);
  };
 
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="timer-card">
        <span className="timer-number">{timeLeft[interval]}</span>
        <span className="timer-label">{interval}</span>
      </div>
    );
  });

  return (
    <>
      {showPopup && (
        <div className="popup-overlay bg-black  ">
          <div className="popup-content relative bg-black">
            <ImCross className="close-icon" onClick={closePopup} />
            <Image src={popUpImage} alt="Event Popup"  style={{
                width: "80%",
                height: "auto",
                maxWidth: "500px",
                }}className="popup-image" />
          </div>
        </div>
      )}
      <div className="Container event_wrapper">
        <h2 style={{ textAlign: "center", fontFamily: "bankGothlic", fontSize: "22px" }}>
          Click Cards to explore events
        </h2>
        <div className="Events">
          <Card />
        </div>

        <div className="countdown-container md:relative md:-bottom-20">
          <h1>Unleash the Future: RoboRashtra 2025 <br /> - Where Innovation Soars!</h1>
          <div className="timer-container">
            {timerComponents.length ? timerComponents : <span>Times up!</span>}
          </div>
        </div>
      </div>

      {/* Popup image */}
      
    </>
  );
};

export default Cards;
