import React, { useRef } from "react";

function AnimateBox() {
    const boxRef = useRef(null)

    const moveBox = () => {
        boxRef.current.style.transition = "transform 1s ease-in-out";
      
        if (boxRef.current.style.transform === "translateX(500px)") {
          boxRef.current.style.transform = "translateX(0)";
        } else {
          boxRef.current.style.transform = "translateX(500px)";
        }
      };
      
    return (
        <div>
            <h2>4. Animation of a Box Using UseRef</h2>
          <div
            ref={boxRef}
            style={{ width: "100px", height: "100px", marginBottom: "7px", backgroundColor: "teal" }}
          ></div>
          <button onClick={moveBox}>Move</button>
        </div>
      );
    }

export default AnimateBox