import React, { useState, useEffect, useRef } from "react";
import styles from "./FloatingSettingButton.module.css";
import { CiHospital1, CiSettings } from "react-icons/ci";
import { BsArrowsMove } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { isCookieAccepted } from "../../library/cookie";

interface PosType {
  x: number;
  y: number;
}

interface PropsType {
  onToggleChat: any;
  position: PosType;
  setPosition: (pos: PosType) => void;
  showTutorial:boolean;
  setShowTutorial:any
}

function setBoundary(num:number, min:number, max:number) {
  if (num < min) {
    return min
  } else if (num > max) {
    return max
  } else {
    return num
  }
}

const FloatingSettingButton: React.FC<PropsType> = ({
  onToggleChat,
  position,
  setPosition,
  showTutorial,
  setShowTutorial
}) => {
  const BUTTON_WIDTH = 70
  const BUTTON_HEIGHT = 70

  const [dragging, setDragging] = useState(false);
  const holdTimeout = useRef<any>(null);
  const dragBorderRef = useRef<HTMLDivElement>(null);

  const closeTutorial = () => {
    setShowTutorial(false);
  };

  const handleStart = (e:any) => {
    // if (e.cancelable) {
    //   e.preventDefault();
    // }
    holdTimeout.current = setTimeout(() => {
      setDragging(true);
    }, 500);
    //setDragging(true);
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (dragging) {
      setPosition({
        x: setBoundary(clientX,0,window.innerWidth - BUTTON_WIDTH),
        y: setBoundary(clientY,0, window.innerHeight -BUTTON_HEIGHT),
      });
    }
  };

  const handleEnd = () => {
    clearTimeout(holdTimeout.current);
    setDragging(false);
  };

  useEffect(() => {
    
    if (isCookieAccepted()) {
      setShowTutorial(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        if (e.cancelable) {
          e.preventDefault();
        }
        handleMove(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (dragging) {
        e.preventDefault();
        handleEnd();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (dragging) {
        if (e.cancelable) {
          e.preventDefault();
        }
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (dragging) {
        e.preventDefault();
        handleEnd();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging]);

  return (
    <div
      className={styles.chatButtonContainer}
      style={{ left: `${position.x}px`, top: `${position.y}px` , display:'flex', flexDirection:'column-reverse'}}
    >
      {dragging ? <div><BsArrowsMove style={{position:'relative', left:'45px'}} size="20px"/></div> : null}
      <div
        className={styles.chatButton}
        onClick={onToggleChat}
        onMouseDown={(e) => handleStart(e)}
        onTouchStart={(e) => handleStart(e)}
        onMouseUp={handleEnd}
      >
        <CiSettings size="30px" />
      
      </div>  

      {showTutorial ? (
        <div
        className={styles.comment}
          style={{
            padding: "20px 20px 20px",
          }}
        >
          <h3 style={{ color: "white" }}>Click To Change Language</h3>
          <p>Push and move this around.</p>
          <button
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              border: "none",
              top: "-5px",
              right: "-5px",
            }}
            onClick={closeTutorial}
          >
            <GiCancel fill="black" size="30px" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FloatingSettingButton;
