"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const Time = () => {
  const [start, setStart] = useState(false);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  const [second, setSecond] = useState(0);
  const startOnClickHandler = () => {
    console.log("onClick function has been clicked");
    setStart((start) => !start);
    // alert("hey");
  };

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        const titTime = `${min} : ${second}`;
        document.title = titTime;
        if (second === 59) {
          if (min == 59) {
            setMin(0);
            setSecond(0);
            setHr((hr) => hr + 1);
          }
          setMin((min) => min + 1);
          setSecond(0);
        } else {
          setSecond((sec) => sec + 1);
        }
      }, 1000);
      //   return clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [start, second]);

  const resetOnClickHandler = () => {
    alert("reset has been clicked");
    setMin(0);
    setSecond(0);
    setStart(false);
  };

  return (
    <>
      <div className="w-11/12 mx-auto flex justify-evenly mt-6"></div>
      <div className="text-white  w-11/12  text-center p-8 text-[8rem]">
        {hr < 10 ? "0" + hr : hr}:{min < 10 ? "0" + min : min}:
        {second < 10 ? "0" + second : second}
      </div>
      <div className="flex justify-center gap-5">
        <button
          onClick={startOnClickHandler}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {start ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetOnClickHandler}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Time;
