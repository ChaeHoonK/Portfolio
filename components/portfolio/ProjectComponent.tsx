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

export default function ProjectComponent({ project }: { project: Project }) {
  const { name, subname, year, tags, imgs, skills, reference, description, videos} =
    project;

  const images = imgs.map((elem) => {
    return (
        <img
          src={elem}
          alt={name}
          className={styles.image}
          height="400px"
          object-fit="fill"
        />
    );
  });

  const vds =  videos?.length == 0 ? null :videos?.map((elem) => {
    return (
      <ReactPlayer width="100%" url={elem} playing={false} style = {{objectFit : "contain"}} />
    )
  })


 
  const media = [images, vds]

  const references = reference?.map((elem)=> {
    return (
      <a href={elem.link} target="_blank"><Button text={elem.name}/></a>
    )
  })
  
  

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
        <Image src={imgs[0]} alt={name} fill style={{borderRadius : '10px'}}/>
        <div className={styles.conciseInfo}>
          <h2>{name}</h2>
          <Button text="More" style = {{color : '#FFFFFF'}} onClick={openModal}/>
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
            <Carousel showThumbs={false}>
              {media as any}
              </Carousel>
          </div>

          <h1>{name}</h1>
          <h2>{subname}</h2>
          <h2>{year}</h2>
          <div>
            <h3>Skills: </h3>
            {skillComponents}
          </div>
          <br />

          {references}

          <p style = {{width:'90%'}}>{description}</p>
          <Button  text="Close" onClick={closeModal}/>
        </div>

      </Modal>
    </>
  );
}
