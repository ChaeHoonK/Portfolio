import React, { useState, useEffect, useRef } from "react";
import styles from "./LanguageComponent.module.css";
import SettingDialog from "./SettingDialog";
import { CiHospital1, CiSettings } from "react-icons/ci";
import { BsArrowsMove } from "react-icons/bs";

interface PropsType {
  lan: string;
  name: string;
  url: string;
  selected: boolean;
}

export const LanguageButton: React.FC<PropsType> = ({ lan, name, url, selected }) => {
  return (
    <div className={styles.buttonContainer}>
      <a href={url}>
        <div className={styles.button}>
          <p>{lan}</p>
        </div>
      </a>
      <p>{name}</p>

      <p>{selected}</p>
    </div>
  );
};

const tmp = { en: "English", ko: "한국어", ja: "日本語", "zh-CN": "简体字", "zh-TW": "傳統的", fr: "Français", de: "Deutsch", ru: "Русский" };
const flags: any = { en: "English", ko: "🇰🇷", ja: "日本語", "zh-CN": "简体字", "zh-TW": "傳統的", fr: "Français" };

const LanguageSelection: React.FC<any> = ({ languages = Object.keys(tmp), names = Object.values(tmp) }: { languages: string[]; names: string[] }) => {
  let currentPath: any = null;
  useEffect(() => {
    currentPath = window.location.pathname;
  });

  const buttons = languages.map((lan, index) => {
    let url = lan == "en" ? "/" : "/" + lan;

    const isSelected = currentPath == url;

    return <LanguageButton name={names[index]} lan={lan.slice(0, 2)} key={index} url={url} selected={isSelected} />;
  });
  return (
    <div className={styles.container}>
      <h2>Choose Language</h2>
      {buttons}
    </div>
  );
};

export default LanguageSelection;
