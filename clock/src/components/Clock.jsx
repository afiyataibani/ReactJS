import React, { useEffect, useRef, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date())
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalRef.current);
      }, []);

      // Format : HH:MM:SS AM/PM

      const formatTime = (data) =>{
        let hours = data.getHours()
        const minutes = data.getMinutes().toString().padStart(2, "0")
        const seconds = data.getSeconds().toString().padStart(2, "0")

        const amPm = hours >= 12 ? "PM" : "AM";

        // 24H 12H
        hours = hours % 12;
        return `${hours} : ${minutes} : ${seconds} : ${amPm}`;
      }

      const formatDate = (date) =>{
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year : "numeric",
            month: "long",
            day: "numeric",
        })
      }

      const setGreeting = (hours) => {
        if (hours < 12) return "Good Morning";
        if (hours < 16) return "Good Afternoon";
        return "Good Evening";
      };
    
      return (
        <div>
            <h1>Clock</h1>
          <div><h2>{setGreeting(time.getHours())}</h2></div>
          <div><h2>{formatTime(time)}</h2></div>
          <div><h2>{formatDate(time)}</h2></div>
        </div>
      );
    };

export default Clock