import type { Project } from "../../types/types";
import SkillComponent from "./SkillComponent";
import Modal from "react-modal";
import { useState } from "react";
import styles from "./ProjectComponent.module.css";
import Button from "../Button";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactPlayer from "react-player";
import HorizontalLine from "../tmp/horizontal_line";

export default function ProjectComponent({ project }: { project: Project }) {
  const { name, subname, year, tags, imgs, skills, reference, description, videos } = project;

  const images = imgs.map((elem, idx) => {
    return <img src={elem} alt={name} className={styles.image} height="400px" object-fit="fill" key={idx} />;
  });

  const vds =
    videos?.length == 0
      ? null
      : videos?.map((elem, idx) => {
          return <ReactPlayer key={idx} width="100%" url={elem} playing={false} controls={true} style={{ objectFit: "contain" }} />;
        });

  const media = vds ? [images, vds] : [images];

  const references = reference?.map((elem, idx) => {
    return (
      <a href={elem.link} target="_blank" rel="noreferrer" key={idx}>
        <Button text={elem.name} />
      </a>
    );
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  const skillComponents = skills.map((skill, idx) => {
    return <SkillComponent key={idx} skill={skill} />;
  });

  return (
    <>
      <div className={styles.container}>
        <Image src={imgs[0]} alt={name} fill style={{ borderRadius: "10px" }} />
        <div className={styles.conciseInfo}>
          <h2 style={{ marginBottom: "5px" }}>{name}</h2>
          <Button text="More" style={{ color: "#FFFFFF" }} onClick={openModal} />
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={styles.Modal}
        contentLabel="Example Modal"
        overlayClassName={styles.Overlay}
        ariaHideApp={false}
      >
        <div className={styles.ModalContainer}>
          <div className={styles.carouselContainer}>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
              {media as any}
            </Carousel>
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles.projectTitle}>{name}</h1>
            <h3>{subname}</h3>
            <h2>{year}</h2>
          </div>

          <HorizontalLine />

          <div style={{ position: "relative", lineHeight: "35px", textAlign: "center" }}>
            <h3>Skills: </h3>
            {skillComponents}
          </div>
          <br />
          <div className={styles.referenceContainer}>{references}</div>

          <HorizontalLine />

          <h3>Description:</h3>

          <p style={{ width: "90%" }}>{description}</p>

          <br />

          <Button text="Close" onClick={closeModal} />
        </div>
      </Modal>
    </>
  );
}
