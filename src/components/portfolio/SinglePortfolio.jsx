"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import ProjectDetailsContent from "./ProjectDetailsContent";

const SinglePortfolio = ({ portfolio }) => {
  const { title, thumb, subTitle, arrowIcon, data } = portfolio;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="pf-item">
        <div className="overlay-content">
          <Image
            src={`/assets/img/portfolio/${thumb}`}
            alt="thumb"
            width={510}
            height={230}
          />
          <div className="content">
            <div className="title">
              <span>{subTitle}</span>
              <h5>{title}</h5>
            </div>
            <button onClick={handleButtonClick} className="portfolio-button">
              <i className={arrowIcon}></i>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ProjectDetailsContent data={data} />
        </Modal>
      )}
    </>
  );
};

export default SinglePortfolio;
