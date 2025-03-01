"use client";
import "./dayOffer.scss";
import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const now = new Date();

  const endOfWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + (7 - now.getDay() - (now.getDay() === 0 ? 7 : 0)), 
    23, 59, 59 
  );

  const [timeLeft, setTimeLeft] = useState<number>(
    Math.floor((endOfWeek.getTime() - now.getTime()) / 1000)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const remainingTime = Math.floor(
        (endOfWeek.getTime() - currentTime.getTime()) / 1000
      );
      setTimeLeft(remainingTime > 0 ? remainingTime : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [endOfWeek]);

  const getTimeParts = (time: number) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeParts(timeLeft);

  return (
    <div className="dayOffer">
      <h2 className="offer-text">Həftənin təklifi</h2>
      <div className="time">
        <span>{String(days).padStart(2, "0")} <mark>gün</mark></span>
        <span>{String(hours).padStart(2, "0")} <mark>saat</mark></span>
        <span>{String(minutes).padStart(2, "0")} <mark>dəqiqə</mark></span>
      </div>
    </div>
  );
};

export default CountdownTimer;