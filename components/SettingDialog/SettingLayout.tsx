import React, { useState, useRef, useEffect } from "react";
import FloatingSettingButton from "../FloatingButton/FloatingSettingButton";
import SettingDialog from "./SettingDialog";
import { truncate } from "fs";

type Props = {
  children: React.ReactNode;
};

type Position = {
  x: number;
  y: number;
};

const SettingLayout: React.FC<Props> = ({ children }: Props) => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 10, y: 10 });
  const [showTutorial, setShowTutorial] = useState(true);
  const chatBoxRef: any = useRef();

  const handleChatButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // const newPos = { x:event.clientX, y:event.clientY}

    // setPosition(newPos)
    setShowChatBox(true);
  };

  const handleDocumentClick = (event: any) => {
    console.log("document click");
    if (
      chatBoxRef.current &&
      !chatBoxRef.current.contains(event.target) &&
      showChatBox == true
    ) {
      console.log("chat should be close");

      setShowChatBox(false);
    }
  };

  useEffect(() => {
    //setPosition({x:window.innerWidth - 82, y:window.innerHeight-20})
    //console.log('inner width:',window.innerWidth - 82)
    if (showChatBox) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div>{children}</div>
      {showChatBox ? (
        <SettingDialog
          position={position}
          onClose={() => setShowChatBox(false)}
        />
      ) : (
        <FloatingSettingButton
          onToggleChat={handleChatButtonClick}
          position={position}
          setPosition={setPosition}
          showTutorial={showTutorial}
          setShowTutorial={setShowTutorial}
        />
      )}
    </>
  );
};

export default SettingLayout;
