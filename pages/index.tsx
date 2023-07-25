import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import SkillSection from "../components/SkillsSection";
import WorkExperienceSection from "../components/WorkExperienceSection";

import { useEffect } from "react";

import ParticlesWrapper from "../components/ParticleWrapper";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

import ReactGA from "react-ga4";
import SettingLayout from "../components/SettingDialog/SettingLayout";
import CookieConsent from "../components/CookieConsent/CookieConsent";

export default function Home() {
  ReactGA.initialize("G-C3ZMWSL9NB");

  useEffect(() => {
    ReactGA.send({ hitType: "pageview" });
  }, []);

  return (
    <>
      <Head>
        <title>Chae Hoon Kim Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SettingLayout>
        <main className={styles.main}>
          <ParticlesWrapper>
            <section id="info" className="containerInfo">
              <IntroSection />
            </section>
          </ParticlesWrapper>
          <Navbar />
          {/* <div> */}
          <div id="about" className="container">
            <AboutSection />
          </div>

          <div id="career" className="container">
            {" "}
            <WorkExperienceSection />
          </div>

          <div id="portfolio" className="container">
            <PortfolioSection lan="" />
          </div>

          <div id="skills" className="container">
            <SkillSection />
          </div>

          <div id="contact" className="container">
            <ContactSection />
          </div>
          {/* </div> */}
        </main>
      </SettingLayout>
      <CookieConsent />
    </>
  );
}
