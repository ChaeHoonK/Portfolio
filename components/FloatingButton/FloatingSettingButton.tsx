import React, { useState, useEffect, useRef } from "react";
import styles from "./FloatingSettingButton.module.css";
import { CiHospital1, CiSettings } from "react-icons/ci";
import { BsArrowsMove } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { isCookieAccepted } from "../../library/cookie";


const BUTTON_WIDTH = 70
const BUTTON_HEIGHT = 70
const PRESS_TIME = 500
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
  

  const [dragging, setDragging] = useState(false);
  const holdTimeout = useRef<any>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const closeTutorial = () => {
    setShowTutorial(false);
  };


  const handleStart = (e:any) => {
    console.log('touchstart/mouserdown fired')
    e.preventDefault();
    holdTimeout.current = setTimeout(() => {
      setDragging(true);
    }, PRESS_TIME);
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
    //document.removeEventListener('drag',makeDefault)
  };

  useEffect(() => {
    if (!buttonRef.current) return
    
    if (isCookieAccepted()) {
      setShowTutorial(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      console.log('mousemove fired')
      const curr = document.elementFromPoint(e.clientX, e.clientY)
      if (!buttonRef.current?.contains(curr)) {
        clearTimeout(holdTimeout.current);
      }

      if (dragging) {
        if (e.cancelable) {
          e.preventDefault();
        }
        handleMove(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      console.log('mouseup fired')
      if (dragging) {
        e.preventDefault();
        handleEnd();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      console.log('touchmove fired')
      const curr = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
      if (!buttonRef.current?.contains(curr)) {
        clearTimeout(holdTimeout.current);
      }

      if (dragging) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
        if (e.cancelable) {
          e.preventDefault();
        }
      }
      
    };

    const handleTouchEnd = (e: TouchEvent) => {
      console.log('touchend fired')
      //const curr = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
      if (!dragging && buttonRef.current?.contains(e.target as Node)) {
        onToggleChat(e)
      }
      if (dragging) {
        e.preventDefault();
        handleEnd();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    buttonRef.current?.addEventListener('touchstart',handleStart,{passive:false});

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      buttonRef.current?.removeEventListener('touchstart',handleStart);
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
        // onTouchStart={(e) => handleStart(e)}
        onMouseUp={handleEnd}
        ref = {buttonRef}
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
