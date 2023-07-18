import React, { useState, useEffect, useRef } from "react";
import styles from "./FloatingSettingButton.module.css";
import SettingDialog from "./SettingDialog";
import {CiHospital1, CiSettings} from 'react-icons/ci'
import {BsArrowsMove} from 'react-icons/bs'

interface PosType {
  x: number;
  y: number;
}

interface PropsType {
  onToggleChat: any;
  position: PosType;
  setPosition: (pos: PosType) => void;
}

const FloatingSettingButton: React.FC<PropsType> = ({ onToggleChat, position, setPosition }) => {
  const [dragging, setDragging] = useState(false);
  const holdTimeout = useRef<any>(null);
  const dragBorderRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    holdTimeout.current = setTimeout(() => {
      setDragging(true);
    }, 500); 
    console.log('down')
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
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        e.preventDefault();
        handleMove(e.clientX, e.clientY);
        console.log('mouse moving')
      }
    };

    const handleMouseUp = (e:MouseEvent) => {
      if (dragging) {
        e.preventDefault();
        handleEnd();
      }
    }

    const handleTouchMove = (e:TouchEvent) => {
      if (dragging) {
        e.preventDefault();
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
        document.documentElement.style.overflow = 'hidden';
        console.log('touch moving')
      }
    }

    const handleTouchEnd = (e:TouchEvent) => {
      if (dragging) {
        e.preventDefault()
        handleEnd()
        document.documentElement.style.overflow = 'auto';
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener('mouseup',handleMouseUp)
    document.addEventListener('touchmove',handleTouchMove)
    document.addEventListener('touchend',handleTouchEnd)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener('mouseup',handleMouseUp)
      document.removeEventListener('touchmove',handleTouchMove)
    document.removeEventListener('touchend',handleTouchEnd)
    };
  }, [dragging]);


  return (
    <div
      className={styles.chatButtonContainer}
      style={{ left:`${position.x}px`, top:`${position.y}px` }}
    >      
      <button
        className={styles.chatButton}
        onClick={onToggleChat}
        onMouseDown={(e) => handleStart()}
        onTouchStart={(e) => handleStart()}
        onMouseUp={handleEnd}
      >
        <CiSettings size='30px'/>
      </button>

      {dragging?<BsArrowsMove size='20px'>hi</BsArrowsMove>:null}
    </div>
  );
};

export default FloatingSettingButton;
