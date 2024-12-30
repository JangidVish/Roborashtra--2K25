"use client";
import React from "react";
import {useState, useEffect} from "react";
import Image from 'next/image';
import Card from "../../components/Card/Card";
import "./events.css";
import { ImCross } from "react-icons/im";


// import popUpimage from "@/images/POP UP.png"

const Cards = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date("2025-01-31");
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

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
    <div className="Container event_wrapper" >
      <h2 style={{textAlign:"center", fontFamily:"bankGothlic", fontSize:"22px"}}>Click Cards to explore events</h2>
    <div className="Events">
      <Card />
    </div>
    
    <div className="countdown-container md:relative md:-bottom-20">
      <h1>Unleash the Future: RoboRashtra 2025  <br /> - Where Innovation Soars!</h1>
      <div className="timer-container">
      {timerComponents.length ? timerComponents : <span>Times up!</span>}
      </div>
    </div>
      </div>
   {/*  notification MenuBar */}      
      
 
  </>

  );
};

export default Cards;