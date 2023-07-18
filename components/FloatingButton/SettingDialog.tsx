import React, { FC, useEffect, useRef } from "react";

type Position = {
  x: number;
  y: number;
};

type Props = {
  position: Position;
  onClose: () => void;
};

const SettingDialog: FC<Props> = ({ position, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const clientHeight = document.documentElement.clientHeight;
  const clientWidth = document.documentElement.clientWidth;
  const top = position.y <= clientHeight / 2 ? position.y : "unset";
  const bottom =
    position.y > clientHeight / 2 ? clientHeight - position.y : "unset";
  const left = position.x <= clientWidth / 2 ? position.x : "unset";
  const right =
    position.x > clientWidth / 2 ? clientWidth - position.x : "unset";

  const style = {
    width: "max-content",
    height: "max-content",
    // minWidth: '200px',
    // minHeight: '350px',
    position: "fixed" as "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    top,
    bottom,
    left,
    right,
  };

  return (
    <div style={style} ref={ref}>
      {/* Dialog content goes here */}

      <h2>Choose Language</h2>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <a href="/">
          <button>English</button>
        </a>
        <a href="/ko">
          <button>한국어</button>
        </a>
        <a href="/ja">
          <button>日本語</button>
        </a>
        <a href="/zh-CN">
          <button>简体字</button>
        </a>
        <a href="/zh-TW">
          <button>傳統的</button>
        </a>
        <a href="/fr">
          <button>Français</button>
        </a>
      </div>
    </div>
  );
};

export default SettingDialog;
