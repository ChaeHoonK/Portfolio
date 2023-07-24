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

const FloatingSettingButton: React.FC<PropsType> = ({
  onToggleChat,
  position,
  setPosition,
  showTutorial,
  setShowTutorial
}) => {
  const [dragging, setDragging] = useState(false);
  const holdTimeout = useRef<any>(null);
  const dragBorderRef = useRef<HTMLDivElement>(null);

  const closeTutorial = () => {
    setShowTutorial(false);
  };

  const handleStart = (e:any) => {
    e.preventDefault()
    holdTimeout.current = setTimeout(() => {
      setDragging(true);
    }, 500);
    console.log("down");
    //setDragging(true);
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (dragging) {
      setPosition({
        x: clientX,
        y: clientY,
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
        e.preventDefault();
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
          <p>You can move the button around.</p>
          <button
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              border: "none",
              top: "0px",
              right: "0px",
            }}
            onClick={closeTutorial}
          >
            <GiCancel size="20px" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FloatingSettingButton;
