import type { Project } from "../../types/types";
import SkillComponent from "./SkillComponent";
import Modal from "react-modal";
import { useState } from "react";
import styles from "./ProjectComponent.module.css";
import Button from "../Button";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ProjectComponent({ project }: { project: Project }) {
  const { name, subname, year, tags, imgs, skills, reference, description } = project;

  const images = imgs.map((elem) => {
    return (
      <div>
        <img src={elem} alt={name} height="200px" />
      </div>
    );
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  const skillComponents = skills.map((skill) => {
    return <SkillComponent skill={skill} />;
  });

  return (
    <>
      <div className={styles.container}>
        <Image src={imgs[0]} alt={name} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" fill/>
        <div className={styles.conciseInfo}>
          <h2>{name}</h2>
          <Button text="More" onClick={openModal} />
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={styles.Modal}
        contentLabel="Example Modal"
        overlayClassName={styles.Overlay}
      >
        <div className={styles.ModalContainer}>
          <h1 style={{ color: "black" }}>{name}</h1>
          <h2>{subname}</h2>
          <h2>{year}</h2>
          <div>
            <span>Skills: </span>
            {skillComponents}
          </div>

          {reference? <h3>{reference}</h3>:null}
          <div className={styles.carouselContainer}>
            <Carousel showThumbs = {false}>{images}</Carousel>
          </div>

          <p>{description}</p>

          

          
        </div>

        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
}
