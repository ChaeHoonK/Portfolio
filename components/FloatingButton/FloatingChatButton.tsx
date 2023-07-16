// import React, { useState, useRef, MouseEventHandler } from 'react';
// import styles from './FloatingChatButton.module.css';

// interface FloatingChatButtonProps {
//   onClick: (e:React.MouseEvent) => void;
//   ref?:any
// }

// const FloatingChatButton: React.FC<FloatingChatButtonProps>  = ({ onClick, ref = null }: any) => {

//   return (
//     <button
//     className={styles.chatButton}
//     onClick ={onClick}
//     ref = {ref}
//     >
//       Chat
//     </button>
//   );
// };

// export default FloatingChatButton;

// import React, { useState } from "react";
// import styles from "./FloatingChatButton.module.css";

// const FloatingChatButton = ({ onToggleChat }:any) => {
//   const [dragging, setDragging] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [startPos, setStartPos] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (event:any) => {
//     console.log(1)
//     setStartPos({ x: event.clientX, y: event.clientY });
//     setDragging(true);
//   };

//   const handleMouseMove = (event:any) => {
//     console.log(4)
//     if (dragging) {
//       console.log(2)
//       setPosition({
//         x: position.x + (event.clientX - startPos.x),
//         y: position.y + (event.clientY - startPos.y),
//       });
//       setStartPos({ x: event.clientX, y: event.clientY });
//     }
//   };

//   const handleMouseUp = () => {
//     console.log(3)
//     setDragging(false);
//   };

//   return (
//     <div
//       className={styles.chatButtonContainer}
//       style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
//     >
//       <button className={styles.chatButton} onClick={onToggleChat}>
//         Chat
//       </button>
//       <div
//         className={styles.dragBorder}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//       ></div>
//     </div>
//   );
// };

// export default FloatingChatButton;

import React, { useState, useRef, useEffect } from "react";
import styles from "./FloatingChatButton.module.css";

const FloatingChatButton = ({ onToggleChat }: any) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const dragBorderRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: any, clientY: any) => {
    setStartPos({ x: clientX, y: clientY });
    setDragging(true);
  };

  const handleMove = (clientX: any, clientY: any) => {
    if (dragging) {
      setPosition({
        x: position.x + (clientX - startPos.x),
        y: position.y + (clientY - startPos.y),
      });
      setStartPos({ x: clientX, y: clientY });
    }
  };

  const handleTouchMove = (e: any) => {
    if (dragging) {
      e.preventDefault();
    }
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleEnd = () => {
    setDragging(false);
  };

  useEffect(() => {
    const dragBorderElement = dragBorderRef.current;
    if (!dragBorderElement) return;

    const handleTouchStart = (e: TouchEvent) => {
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (dragging) {
        e.preventDefault();
      }
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    dragBorderElement.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    dragBorderElement.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    dragBorderElement.addEventListener("touchend", handleEnd, {
      passive: false,
    });

    return () => {
      dragBorderElement.removeEventListener("touchstart", handleTouchStart);
      dragBorderElement.removeEventListener("touchmove", handleTouchMove);
      dragBorderElement.removeEventListener("touchend", handleEnd);
    };
  }, [dragging, handleStart, handleMove, handleEnd]);

  return (
    <div
      className={styles.chatButtonContainer}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <button className={styles.chatButton} onClick={onToggleChat}>
        Chat
      </button>
      {/* <div
        className={styles.dragBorder}
        onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
        onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => {handleStart(e.touches[0].clientX, e.touches[0].clientY)}}
        onTouchMove={(e) => {
          handleTouchMove(e)}
        }
        onTouchEnd={handleEnd}
      ></div> */}
      <div
        ref={dragBorderRef}
        className={styles.dragBorder}
        onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
        onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      ></div>
    </div>
  );
};

export default FloatingChatButton;
